const name = document.getElementById('name');

const email = document.getElementById('email');

const btn = document.querySelector('.btn');

const myForm = document.getElementById('my-form');
const h33 = document.querySelector(".h33");
const h34 = document.querySelector(".h34");

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Name : ' + name.value)
    console.log('Email : ' + email.value)
    
    
    
} )

btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.style.color = 'red'
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    h33.textContent = localStorage.getItem('name')
    h34.textContent = localStorage.getItem('email')
    
    // console.log(h33)
})
btn.addEventListener('mouseover', (e) => {
    e.preventDefault()
    btn.style.padding = '20px'
})
btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
    btn.style.color = 'yellow'
})




