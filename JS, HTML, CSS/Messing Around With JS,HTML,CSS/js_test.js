const redSquare = document.querySelector('.red-square');
redSquare.style.backgroundColor = 'limegreen';

const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey there!");
});
document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
