// Array of YouTube video IDs and titles
var videoIds = [
    { id: "okKNce80gNw", title: "Microsoft Flight Simulator- This is your Captain speaking!" },
    { id: "Vcsz-QMzlNc", title: "Chivalry 2- Double Kill." },
    { id: "6SSBMg3xkKo", title: "Chivalry 2- One on One." },
    { id: "aodbp3lkRpI", title: "Lego Fortnite-Escape Plan!" },
    { id: "7ZrtIXELYY0", title: "Wu LongFallen Dynasty-Before the loot nerf." },
    { id: "8xRVO71D11s", title: "Lego Fortnite-Directional & Stability Design Tests." },
    { id: "Ft2PzFzYHBc", title: "Two Point Campus-At least they flushed." }
];

// Index of the currently displayed video
var currentVideoIndex = 0;
var player; // YouTube player instance
var autoplayInterval; // Store autoplay interval ID

// Function to load the currently selected video into the carousel
function loadVideo() {
    var videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = ''; // Clear previous video

    // Create an iframe for the current video
    var iframe = document.createElement('iframe');
    iframe.id = 'videoFrame';
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/' + videoIds[currentVideoIndex].id;
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);

    // Update video title
    document.querySelector('.video-title').textContent = videoIds[currentVideoIndex].title;

    // Check if player is already created
    if (player) {
        // Load the new video into the existing player
        player.loadVideoById(videoIds[currentVideoIndex].id);
    } else {
        // Create YouTube player instance
        player = new YT.Player('videoFrame', {
            height: '315',
            width: '560',
            videoId: videoIds[currentVideoIndex].id,
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

// Function to move to the next video in the carousel
function nextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex >= videoIds.length) {
        currentVideoIndex = 0;
    }
    loadVideo();
}

// Function to start autoplay of the carousel
function startAutoplay() {
    autoplayInterval = setInterval(nextVideo, 15000); // Change video every 15 seconds (15000 milliseconds)
}

// Add event listeners to navigation buttons
document.querySelector('.prev').addEventListener('click', function() {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videoIds.length - 1;
    }
    loadVideo();
});
document.querySelector('.next').addEventListener('click', nextVideo);

// Load initial video when the page loads
window.addEventListener('load', function() {
    loadVideo();
});

// Function to toggle image preview size
function toggleImagePreview(image) {
    if (image.classList.contains('preview')) {
        // If image is in preview mode, revert to normal size
        image.style.width = '20%';
        image.style.height = '20%';
        image.classList.remove('preview');
    } else {
        // If image is not in preview mode, set size to half
        image.style.width = '10%';
        image.style.height = '10%';
        image.classList.add('preview');
    }
}
