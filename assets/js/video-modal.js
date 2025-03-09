// Video Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the video modal element
    const videoModal = document.getElementById('videoModal');
    
    // When the modal is shown, set the iframe src to load the video
    if (videoModal) {
        videoModal.addEventListener('show.bs.modal', function () {
            const iframe = this.querySelector('iframe');
            const dataSrc = iframe.getAttribute('data-src');
            iframe.setAttribute('src', dataSrc);
        });
        
        // When the modal is hidden, reset the iframe src to stop the video
        videoModal.addEventListener('hide.bs.modal', function () {
            const iframe = this.querySelector('iframe');
            iframe.setAttribute('src', 'about:blank');
        });
    }
});
