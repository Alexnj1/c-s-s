const postBtn = document.querySelector("#submit-compliment");

function submitCompliment(event) {
  event.preventDefault();

  const title = document
    .querySelector("input[type='title']")
    .value.toString()
    .trim();
  const body = document
    .querySelector("textarea[name='body']")
    .value.toString()
    .trim();

  console.log(title, body);

  if (title && body) {
    if (title.length > 255) {
      alert(
        `Title cannot be more than 255 characters, over by ${
          title.length - 255
        }`
      );
    } else if (body.length > 255) {
      alert(
        `Body cannot be more than 255 characters, over by ${
          body.length - 255
        }`
      );
    } else {
      fetch("/api/post/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post_title: title,
          post_content: body,
          post_category_id: 5,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Your compliment has been submitted. Thank you for showing love for C-S-S!");
            window.location.replace("/dashboard");
          } else {
            console.log(response);
            alert("There has been an error");
            window.location.replace("/homepage");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    alert("You must fill in all fields!");
  }
}

postBtn.addEventListener("click", submitCompliment);
