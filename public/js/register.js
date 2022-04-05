const registerBtn = document.querySelector("button[name='register']");

function newUser(event) {
  event.preventDefault();

  let username = document.querySelector("input[type='username']").value.trim();
  let email = document.querySelector("input[type='email']").value.trim();
  let password = document.querySelector("input[type='password']").value.trim();

  if (username && email && password) {
    if (email.includes("@" || "@luxury.com")) {
      alert(
        "Please do not include '@' or '@(email provider)' in your household email. '@luxury.com' will be provided for you."
      );
      return;
    } else if (password.length < 5) {
      alert("Your password must be at least 5 characters");
      return;
    }

    fetch("/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        household_username: username,
        email: `${email}@luxury.com`,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("You have been registered!");
        window.location.replace("/dashboard/login");
      } else {
          console.log(err)
        alert(`There has been an error. ${response.status}`);
        window.location.replace("/dashboard/login");
      }
    });
  }
}

registerBtn.addEventListener('click', newUser)
