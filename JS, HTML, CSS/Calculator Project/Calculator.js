


const paragraph = document.querySelector('.display-text');
const all_buttons = document.querySelectorAll('.row-buttons');


for (let i = 0; i< (all_buttons.length);i++ ){
  console.log(1);

  all_buttons[i].addEventListener('click', function(event) {
      paragraph.innerText = event.target.innerText;
  });
}
