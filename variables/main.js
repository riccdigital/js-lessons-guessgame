const button = document.querySelector('button')

button.onclick = function () {
  let age = prompt('Enter your age: ')
  if (age >= 18) {
    alert('You are an adult!')
  } else {
    alert ('Drink some milk!')
  }
}