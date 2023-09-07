console.log('hello counter');

let counter = document.getElementById('counter')
function changeCounterHTML(count) {
  // console.log('innerHTML', counter.innerHTML);
  // console.log('innerText', counter.innerText);
  counter.innerText = `Counter: ${count}`
}


let count = 0
function onCounterClick(event) {
  console.log('On counter click 1', event);

  // console.log('event', event.currentTarget);
  count++
  console.log('Counter Clicked', count);
  changeCounterHTML(count)
}

function changeNameHTML(text) {
  let nameInput = document.querySelector('#nameInput')
  console.log('nameInput', nameInput.innerText);
  nameInput.innerText = text
}

function onInputChange(event) {
  // console.log('onInputChange', value);
  // console.log('value', event.target.value);

  changeNameHTML(event.target.value)
}

let input = document.getElementById('input')
input.addEventListener('input', onInputChange)


let counterBtn = document.querySelector('#counterBtn')
counterBtn.onclick = function (event) {
  console.log('On counter click 2', event);
}


function onBtn2Clicked(event) {
  console.log('onBtn2Clicked');
}
function onBtn2ClickedSecond(event) {
  console.log('onBtn2ClickedSecond');
}
function onBtn2ClickedThird(event) {
  console.log('onBtn2ClickedThird');
}

let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', onBtn2Clicked)
btn2.addEventListener('click', onBtn2ClickedSecond)
btn2.addEventListener('click', onBtn2ClickedThird)

btn2.removeEventListener('click', onBtn2Clicked)
btn2.removeEventListener('click', onBtn2ClickedSecond)
btn2.removeEventListener('click', onBtn2ClickedThird)


function onDocClick(event) {
  console.log('click', event);
}

// Не будет удалятся / не правильно
document.addEventListener('click', function (event) {
  console.log('click', event);
})
document.removeEventListener('click', function (event) {
  console.log('click', event);
})

// Будет удалятся / правильно
document.addEventListener('click', onDocClick)
document.removeEventListener('click', onDocClick)
