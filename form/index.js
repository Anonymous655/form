const name = document.getElementById('name');

const email = document.getElementById('email');

const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Name : ' + name.value)
    console.log('Email : ' + email.value)

} )

btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.style.color = 'red'
})
btn.addEventListener('mouseover', (e) => {
    e.preventDefault()
    btn.style.padding = '20px'
})
btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
    btn.style.color = 'yellow'
})