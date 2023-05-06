const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const goBack = document.querySelector('.go-back');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

goBack.remove();

const back = yesBtn.addEventListener('click' ,() =>{
   question.innerHTML = 'I knew it :) ';
   noBtn.remove();
});


noBtn.addEventListener('mouseover' , () =>{  
   const i = Math.floor(Math.random()  * (wrapperRect.width -  noBtnRect.width)) 
   +1 ;
   const j = Math.floor(Math.random()  * (wrapperRect.height -  noBtnRect.height)) 
   +1 ;
   noBtn.style.right = i + 'px';
   noBtn.style.top = j + "px";
});