let emailField = document.querySelector("input[type='email']");
let passwordField = document.querySelector("input[type='password']");
let submitBtn = document.querySelector("button[type='submit']");

function login(event) {
  event.preventDefault();

  let userEmail = emailField.value.toString();
  let userPassword = passwordField.value.toString();

  if (!userEmail || !userPassword) {
    alert("You must fill out both fields");
    return;
  }
  fetch("/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  }).then((response) => {
    if (response.ok) {
        // console.log(response)
      alert("Now Logged In!");
      window.location.replace("/dashboard");
    } else {
      alert("Your Username/Password is Incorrect");
    }
  }).catch((err) => {
    console.log(err);
  });
  //   console.log(userEmail, userPassword);
}

submitBtn.addEventListener("click", login);
