
const loginForm = document.getElementById('login-form')

if (loginForm) {
    loginForm.addEventListener('submit', checkEntries)
}

// async function fetchEntries() {
//     const form = new FormData(e.target)
//     const username = form.get('username')

//     await fetch(`http://localhost:3000/diary/user/${username}`)
//         .then(resp => resp.json())
//         .then(data => goToDiary(data))
//         .catch(e => {
//             console.log(e)
//             alert("Error while retrieving user's data ")
            
//         })
    
// }

async function checkEntries(e) {
    try {
        e.preventDefault()
        const form = new FormData(e.target);
        const username = form.get('username');

        const response = await fetch(`http://localhost:3000/diary/user/${username}`);
        if (!response.ok) {
            alert("Error while retrieving user's data");
            return;
        }
         
        const data = await response.json();
          console.log(data)
        goToDiary(username);
    } catch (error) {
        console.error(error);
       
    }
}


function goToDiary(username) {
    localStorage.setItem("username", username)
    window.location.assign("diary.html")

}


