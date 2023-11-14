
// let btns = document.querySelectorAll('button');
// const myFun = function(){
//     alert('JS HEllo')
// };
// btns.forEach((el)=>{
//     el.addEventListener('click',myFun);
//     el.style.color='red';
//     el.style.borderColor='red';
//     el.classList.add('myClass');
//     el.classList.toggle('nur');
//     el.innerText = 'Hello'; //textConent
// });

//btn.removeEventListener('click',myFun);

$('button[type="submit"]').css({
    "color":'blue',
    "borderColor":'blue'
}).addClass('youClass')
.toggleClass('bol')
.on('click',function(){
    if($('#txt').css('display') == 'none'){
       // $('#txt').show();
       //$('#txt').slideDown();
       $('#txt').fadeIn(3000).focus();
    }else{
       // $('#txt').hide();
       //$('#txt').slideUp();
       $('#txt').fadeOut(1000); //slow 
    }
    $('#myLink').trigger('click');
});



$('#myLink').click(function(ev){
    ev.preventDefault();
    alert("Salem, Link!");
});


//$btn.off('click');

document.addEventListener('DOMContentLoaded',function(){
    console.log('Dom I`m ready!');

});

// jQuery(document).ready(()=>{
//     console.log('I`m ready!');
// });

$(()=>{
    console.log('I`m ready!');
});

$(()=>{
    console.log('I`m ready! 11');
});

$(()=>{
    console.log('I`m ready! 22');
});