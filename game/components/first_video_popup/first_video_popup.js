function renderVideoPopup(wrapper, video, nextPage) {
    wrapper.innerHTML = "";

    let videoModalContainer = document.createElement("div");
    videoModalContainer.id = "video-modal-1";
    videoModalContainer.classList.remove("hidden");
    videoModalContainer.classList.add("visible");
    wrapper.append(videoModalContainer);

    let videoInner = document.createElement("div");
    videoInner.id = "video-content";
    videoModalContainer.append(videoInner);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container-1";
    videoInner.append(closePopupButtonContainer);

    let closePopupButtonVideo = document.createElement("button");
    closePopupButtonVideo.id = "close-popup-button-1";
    closePopupButtonVideo.innerHTML = `    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>`; // your existing SVG code
    closePopupButtonVideo.addEventListener("click", () => {
        videoModalContainer.classList.remove("visible");
        videoModalContainer.classList.add("hidden");
        nextPage(wrapper);
    });
    closePopupButtonContainer.append(closePopupButtonVideo);

    // Check if the video is a YouTube link
    if (video.includes("youtube.com") || video.includes("youtu.be")) {
        // Extract the video ID (works with both youtu.be and youtube.com URLs)
        let videoId = "";
        const youtubeMatch = video.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (youtubeMatch && youtubeMatch[1]) {
            videoId = youtubeMatch[1];
        }

        let iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.frameBorder = "0";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        videoInner.append(iframe);
    } else {
        // Otherwise use standard HTML5 <video>
        let videoContent = document.createElement("video");
        videoContent.id = "video-player";
        videoContent.controls = true;
        videoContent.poster = "https://via.placeholder.com/432x932?text=Coming+Soon";

        let videoSource = document.createElement("source");
        videoSource.src = video;
        videoSource.type = "video/mp4";
        videoContent.appendChild(videoSource);

        videoInner.append(videoContent);
    }
}
