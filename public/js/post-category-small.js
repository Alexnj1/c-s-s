let catBtn = document.querySelector("button[name='cat']");

function selectCat(event) {
  event.preventDefault();
  let cat = parseInt(document.querySelector("select").value);

  console.log(cat);

  if (!cat) {
    alert("Choose a category first!");
    return;
  }
  window.location.replace(`/homepage/posts/${cat}`);
}

catBtn.addEventListener("click", selectCat);
