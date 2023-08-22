var ndw_btn = document.getElementById('nairobi-design-week')
ndw_btn.addEventListener('click', function(e){
    videoSrc = ndw_btn.getAttribute('data-bs-src')
})

var wstrn_btn = document.getElementById('wstrn-unload')
wstrn_btn.addEventListener('click', function(e){
    videoSrc = ndw_btn.getAttribute('data-bs-src')
})




var videoModal = document.getElementById('modal-youtube-videos')
var video = document.getElementById('video')
var videoSrc

basePath = "https://www.youtube.com/embed/"
extension = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
videoModal.addEventListener('shown.bs.modal',(e)=>{
    youTubeUrl =  basePath.concat(videoSrc, extension)
    console.log(youTubeUrl)
    video.setAttribute('src', youTubeUrl)
    //video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', "")
})

// Close the video if the user clicks outside!
window.onclick = function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
}