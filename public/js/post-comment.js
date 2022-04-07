const commentBtn = document.querySelector("button[name='post']");
const commentBtnSmall = document.querySelector("button[name='post-s']");
const comment = document.querySelector("input[type='text']" || "input[type='text-s']");
const commentSmall = document.querySelector("input[type='text-s']");


function postComment() {
  const newComment = comment.value.trim();
  const newCommentSmall = commentSmall.value.trim()
  // const postId = window.location.pathname.toString().slice(-1);
  const postId = document.querySelector('#id').innerHTML
  console.log(postId)

  if (newComment.length || newCommentSmall.length) {
    if ((newComment.length > 150) || (newCommentSmall.length > 150)) {
      const length = newComment.length || newCommentSmall.length;
      alert(`Comments may only be 150 characters (over by ${length - 150}).`);
      return;
    }
    fetch("/api/comment/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment_content: newComment || newCommentSmall,
        post_id: postId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          if (response.url.includes("/login")) {
            window.location.replace(response.url);
          } else {
            alert("Comment Posted!");
            window.location.reload();
          }
        } else {
          alert("There has been an error"); // check back on this
          window.location.replace("/homepage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("Please enter a comment.");
  }
}

commentBtn.addEventListener("click", postComment);
commentBtnSmall.addEventListener("click", postComment);
