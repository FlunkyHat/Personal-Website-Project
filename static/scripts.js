document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("closeButton");
    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");

    // Close modal when close button is clicked
    closeButton.addEventListener("click", function() {
        videoModal.style.display = "none";
        videoFrame.src = "";
    });

    // Open modal and set video source when video thumbnail is clicked
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");
    videoThumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            const videoSource = thumbnail.dataset.videoSource;
            videoFrame.src = videoSource;
            videoModal.style.display = "block";
        });
    });
});
