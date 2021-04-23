const btn = document.querySelector(".btn");

const myForm = document.getElementById("my-form");
const users = document.querySelector(".ul");


document.addEventListener("DOMContentLoaded", () => {
  var keys = Object.keys(localStorage);
  let i = keys.length;
  let stringified;
  let people;
  while (i--) {
    if (keys[i].match(/user/g)) {
      stringified = localStorage.getItem(keys[i]);
      people = JSON.parse(stringified);
      addThings(people);
    }
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  btn.style.color = "red";
  if (email.length > 0 && name.length > 0) {
    var obj = {
      name: name,
      email: email,
    };
    localStorage.setItem("user" + email, JSON.stringify(obj));
    addThings(obj);
  }
});

function addThings(Objectt) {
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`Name: ${Objectt.name} and Email: ${Objectt.email}`)
  );
  users.appendChild(li);
  let eb = document.createElement('input');
  eb.type = 'button';
  eb.id = 'edit'
  eb.value = 'Edit'
  li.appendChild(eb)
  eb.style.margin = "2px"
  eb.style.marginLeft = "10px"
  eb.style.border = "2px solid red"
  eb.style.padding = "2px"
  eb.addEventListener('click', () => {
    document.getElementById("name").value = Objectt.name;
    document.getElementById("email").value = Objectt.email;
    
    li.remove();
  })



// delete button
   const db = document.createElement("input")
   db.value = "Delete";
   db.type = "Button";
   db.id = "delete"
   li.appendChild(db)
   db.style.border = "2px solid red"
   db.style.color = "red"
   db.style.padding = "2px"
   db.style.marginLeft = "8px"
   db.addEventListener('click', () => {
    localStorage.removeItem(`user${Objectt.email}`)
    
    li.remove();
   })
}
  

  



btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  btn.style.padding = "20px";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  btn.style.color = "yellow";
});


