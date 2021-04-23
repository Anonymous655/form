const btn = document.querySelector(".btn");

const myForm = document.getElementById("my-form");
const users = document.querySelector(".ul");

document.addEventListener("DOMContentLoaded", () => {
  console.log("vscodghbe");
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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  btn.style.color = "red";
  if (email.length > 0 && name.length > 0) {
    const obj = {
      name: name,
      email: email,
    };
    console.log(obj);
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
}

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  btn.style.padding = "20px";
});
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  btn.style.color = "yellow";
});
