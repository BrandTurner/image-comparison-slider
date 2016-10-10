'use strict'

// Style
require('./index.scss')

let bindComparison = (handle, resized, container) => {

  let move = {}
  let moveWidth = 0

  let moveSlide = (e) => {

    let pageX = e.pageX || e.targetTouches[0].pageX || e.originalEvent.targetTouches[0].pageX
    let pageY = e.pageY || e.targetTouches[0].pageY || e.originalEvent.targetTouches[0].pageY

    move = {
      left: pageX - container.offsetLeft,
      top: pageY - container.offsetTop
    };

    moveWidth = (move.left - 1) * 100 / container.offsetWidth + '%';

    handle.style.left = moveWidth
    resized.style.width = moveWidth

  }

  container.addEventListener("mousemove", moveSlide)
  container.addEventListener("touchmove", moveSlide)

}

// Get sliders and iterate on them
let sliders = document.querySelectorAll(".slide-comparison")
sliders.forEach((element, index, array) => {
  element.querySelector('.resized img').style.width = element.offsetWidth + 'px'
  bindComparison(element.querySelector('.divider'), element.querySelector('.resized'), element)
});

// On window resize
window.onresize = (event) => {
  sliders.forEach((element, index, array) => {
    element.querySelector('.resized img').style.width = element.offsetWidth + 'px'
  });
}