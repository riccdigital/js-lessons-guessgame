const button = document.querySelector('button')

button.onclick = function () {
  let age = window.prompt('Enter your age: ')
  if (age >= 18) {
    window.alert('You are an adult!')
  } else {
    window.alert('Drink some milk!')
  }
}