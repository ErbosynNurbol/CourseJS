
//Document Loaded!
$(()=>{
  let sliderIndex = 0;
   const $images = $('.carousel .sliders > img');
   const $bullets= $('.slider-bullets>ul');
  $images.each((index)=>{
    let $li = $('<li></li>');
    $bullets.append($li);
  });

   const setSliderItem = ()=>{
    if(sliderIndex > $images.length -1){
        sliderIndex = 0;
    }else if(sliderIndex < 0){
      sliderIndex = $images.length -1;
    }
    $images.hide();
    $($images[sliderIndex]).show();
    $($bullets.find('li')).removeClass('active');
    $($bullets.find('li').get(sliderIndex)).addClass('active');
   };
   setSliderItem();
   let sliderInterval = setInterval(()=>{
    sliderIndex++;
    setSliderItem();
   },3000);

   $('.slider-btns .btn-right').click(()=>{
    clearInterval(sliderInterval);
    sliderIndex++;
    setSliderItem();
    sliderInterval = setInterval(()=>{
      sliderIndex++;
      setSliderItem();
     },3000);
   });
   $('.slider-btns .btn-left').click(()=>{
    clearInterval(sliderInterval);
    sliderIndex--;
    setSliderItem();
    sliderInterval = setInterval(()=>{
      sliderIndex++;
      setSliderItem();
     },3000);
   });

   $('.slider-bullets > ul li').click(function(){
    clearInterval(sliderInterval);
    sliderIndex = $(this).index();
    setSliderItem();
    sliderInterval = setInterval(()=>{
      sliderIndex++;
      setSliderItem();
     },3000);
   });
});


$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    slideWidth: 600,
    speed:1000,
    randomStart: true
  });
});