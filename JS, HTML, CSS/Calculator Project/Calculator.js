


const displayText = document.querySelector('.display-text');
const allButtons = document.querySelectorAll('.row-buttons');


for (let i = 0; i< (allButtons.length);i++ ){

  allButtons[i].addEventListener('click', function(event) {
    if(event.target.className == 'calc-button'){
      if (event.target.innerText[0] == 'C'){
        console.log(event.target.innerText);
        displayText.innerText[0] = 'C';
      }
    }
      /*else{
        displayText.innerText = event.target.innerText;
      }*/



  });
}
