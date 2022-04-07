const postBtn = document.querySelector("#submit-complaint");

function submitComplaint(event) {
  event.preventDefault();

  const title = document
    .querySelector("input[type='title']")
    .value.toString()
    .trim();
  const body = document
    .querySelector("textarea[name='body']")
    .value.toString()
    .trim();
  const reasons = document
    .querySelector("input[type='reason']")
    .value.toString()
    .trim();

  console.log(title, body, reasons);

  if (title && body && reasons) {
    if (title.length > 255) {
      alert(
        `Post title cannot be more than 255 characters, over by ${
          title.length - 255
        }`
      );
    } else if (body.length > 255) {
      alert(
        `Post body cannot be more than 255 characters, over by ${
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
          reason: reasons,
          post_category_id: 4,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Your complaint has been submitted!");
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

postBtn.addEventListener("click", submitComplaint);
