let logoutBtn = document.querySelector(".logout")
let logoutBtns = document.querySelector(".logout-s")

function logout () {
    fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        if (response.ok) {
            window.location.replace('/')
        } else {
            alert('There was an error!')
            window.location.reload()
        }
    })
}

logoutBtn.addEventListener('click', logout)
logoutBtns.addEventListener('click', logout)