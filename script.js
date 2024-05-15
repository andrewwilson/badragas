document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'YOUR_YOUTUBE_API_KEY';
    const channelId = 'YOUR_CHANNEL_ID';
    const videoContainer = document.querySelector('.video-container');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoElement = document.createElement('iframe');
                videoElement.width = "560";
                videoElement.height = "315";
                videoElement.src = `https://www.youtube.com/embed/${item.id.videoId}`;
                videoElement.frameBorder = "0";
                videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                videoElement.allowFullscreen = true;
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
});
