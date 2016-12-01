// document.addEventListener("DOMContentLoaded", ()=>{
//
// });
$(()=>{
  let slider = $('#slider'),
      sliderWrapper = $('.slider__wrapper'),
      img = $('.slider__wrapper img'),
      next = $('.next'),
      prev = $('.prev');
    let position = sliderWrapper.position().left,
        width= slider.width();
        position= position*-1;
  console.log(position,width)
  img.last().insertBefore(img.first());
  next.on('click',()=>{
    sliderWrapper.animate({
      left: position-width+'px'
    },500)
    position = sliderWrapper.position().left
    console.log(position)
  })
});
