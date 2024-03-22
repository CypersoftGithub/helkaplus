const scriptURL = 'https://script.google.com/macros/s/AKfycbw9dP31B70xXpLLMe_3JA3j_9C6xmokC_7h4sVQXvulgqP4c1wyw-sTp7UR3PjC8H2W/exec'

const form = document.forms['appoinment']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})