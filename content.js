console.log("[FB Reels Stable] Started");

let isMoving = false;
let lastVideo = null;

/**
 * Get CURRENT active video (important fix)
 */
function getActiveVideo() {
    const videos = [...document.querySelectorAll("video")];

    return videos.find(v =>
        v.offsetParent !== null &&
        v.readyState > 0 &&
        !v.paused
    ) || videos[0];
}

/**
 * Detect ads
 */
function isSponsored() {
    const text = document.body.innerText || "";
    return (
        text.includes("Sponsored") ||
        text.includes("Được tài trợ") ||
        text.includes("Quảng cáo") || 
        text.includes("Ad")
    );
}

/**
 * Next reel (robust click + fallback)
 */
function nextReel() {
    if (isMoving) return;
    isMoving = true;

    console.log("[FB Reels] NEXT");

    const btn =
        document.querySelector('[aria-label="Next Card"]');

    if (btn) {
        btn.dispatchEvent(
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window
            })
        );
    } else {
        // fallback
        window.scrollBy(0, window.innerHeight);
    }

    setTimeout(() => {
        isMoving = false;
    }, 2000);
}

/**
 * Main loop (NO mutation attach)
 */
setInterval(() => {
    const video = getActiveVideo();
    if (!video) return;

    lastVideo = video;

    // force play
    if (video.paused) {
        video.play().catch(() => {});
    }

    video.muted = false;

    // skip ads instantly
    if (isSponsored()) {
        console.log("[FB Reels] AD → SKIP");
        nextReel();
        return;
    }

    const remain = video.duration - video.currentTime;

    // stable trigger (ONLY ONCE)
    if (
        Number.isFinite(remain) &&
        remain > 0 &&
        remain < 0.4
    ) {
        console.log("[FB Reels] NEXT by time");
        nextReel();
    }

}, 300);