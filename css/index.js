/*$('html, body').css(["overflow": "hidden", "height": '100%']); //모달팝업 중 body의 scroll을 hidden 시킴
$('html, body').css
*/



/* const body = document.getElementsByTagName('body')[0];
body.classList.add('scrollLock'); */

/*const block=document.getElementsByClassName('block')[0];
const body=document.getElementsByTagName('body')[0];
const idea=document.getElementsByClassName('mainmodal1');
const modal_back=document.getElementsByClassName('mainmodal0');
const modal_white=document.getElementsByClassName('mainmodal2');

if (block) {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = 'auto';
}; 

idea[0].addEventListener('click', function(){
    /*modal_back[0].classname.add('block');  */
    /*modal_back[0].style.display='block'; 
    modal_white[0].style.display='block';
});

function handleTitleClick(){
    const clicked = "clicked";
    
} */

const body=document.getElementsByTagName('body');
const idea=document.getElementsByClassName('mainmodal1');
const idea2=document.getElementsByClassName('mainmodal2');
const idea3=document.getElementsByClassName('mainmodal3');
const idea4=document.getElementsByClassName('mainmodal4');
const modal_back=document.getElementsByClassName('modalhidden');
const modal_back2=document.getElementsByClassName('modalhidden2');
const modal_back3=document.getElementsByClassName('modalhidden3');
const modal_back4=document.getElementsByClassName('modalhidden4');
const modal_backk=document.getElementsByClassName('modalback');
const modal_backk2=document.getElementsByClassName('modalback2');
const modal_backk3=document.getElementsByClassName('modalback3');
const modal_backk4=document.getElementsByClassName('modalback4');
const modal_white=document.getElementsByClassName('mainmodalcontents');
const modal_white2=document.getElementsByClassName('mainmodalcontents2');
const modal_white3=document.getElementsByClassName('mainmodalcontents3');
const modal_white4=document.getElementsByClassName('mainmodalcontents4');


/*if (modal_back).hasClass("block") {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = 'auto';
}*/


idea[0].addEventListener('click', function(){
    body[0].classList.add('scrollLock')
    modal_back[0].classList.add('block');
    modal_white[0].classList.add('block');
});

idea2[0].addEventListener('click', function(){
    body[0].classList.add('scrollLock')
    modal_back2[0].classList.add('block');
    modal_white2[0].classList.add('block');
});

idea3[0].addEventListener('click', function(){
    body[0].classList.add('scrollLock')
    modal_back3[0].classList.add('block');
    modal_white3[0].classList.add('block');
});

idea4[0].addEventListener('click', function(){
    body[0].classList.add('scrollLock')
    modal_back4[0].classList.add('block');
    modal_white4[0].classList.add('block');
});

modal_backk[0].addEventListener('click', function(){
    modal_back[0].classList.remove('block');
    modal_white[0].classList.remove('block');
    body[0].classList.remove('scrollLock')
});
modal_backk2[0].addEventListener('click', function(){
    modal_back2[0].classList.remove('block');
    modal_white2[0].classList.remove('block');
    body[0].classList.remove('scrollLock')
});

modal_backk3[0].addEventListener('click', function(){
    modal_back3[0].classList.remove('block');
    modal_white3[0].classList.remove('block');
    body[0].classList.remove('scrollLock')
});

modal_backk4[0].addEventListener('click', function(){
    modal_back4[0].classList.remove('block');
    modal_white3[0].classList.remove('block');
    body[0].classList.remove('scrollLock')
});

