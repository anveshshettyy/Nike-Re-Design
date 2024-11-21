const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
}
videoconAnimation();

function loadinganimation() {
    gsap.from(".page1 h1", {
      y: 500,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from(".page2 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
loadinganimation();

var elems = document.querySelectorAll(".anim")
var page6= document.querySelector(".page6")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page6.style.backgroundImage = `url(${bgimg})`
    })
})


const container = document.getElementById('container');
const circle = document.getElementById('circle');

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - container.offsetLeft;
    const y = e.clientY - container.offsetTop;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.classList.add('show'); // Show the circle when mouse is inside container
});

container.addEventListener('mouseleave', () => {
    circle.classList.remove('show'); // Hide the circle when mouse leaves container
});