//  const activityData = [
//     {
//       "title": "Meeting with Client",
//       "content": "Discussed project requirements and timelines.",
//       "timestamp": "2023-11-23 10:00:00",
//       "category": "WORK",
//     },
//     {
//       "title": "Morning Jog",
//       "content": "Ran 5 miles in the park.",
//       "timestamp": "2023-11-23 07:00:00",
//       "category": "FITNESS",
//     },
//     {
//       "title": "Family Vacation",
//       "content": "Visited the beach and enjoyed the sunset.",
//       "timestamp": "2023-11-23 15:00:00",
//       "category": "TRAVEL",
//     },
//     {
//       "title": "Personal Reflection",
//       "content": "Spent quiet time reflecting on personal goals.",
//       "timestamp": "2023-11-23 18:30:00",
//       "category": "PERSONAL",
//     },
//     {
//       "title": "Shopping List",
//       "content": "Bought groceries and household essentials.",
//       "timestamp": "2023-11-23 12:45:00",
//       "category": "OTHER",
//     }
//   ];

// Get the table body
const tableBody = document.querySelector('#activityTable tbody')
const fetchEntries = async () => {
  const username = localStorage.getItem('username')

  await fetch(`http://localhost:3000/diary/user/${username}`)
    .then(resp => resp.json())
    .then(data => showEntries(data))
    .catch(e => console.log(e))
}

function showEntries (activityData) {
  activityData.forEach(activity => {
    const row = tableBody.insertRow()
    const userId = activity.user_id
     localStorage.setItem('user_id', userId)
    // Exclude the 'content' field from being displayed
    Object.entries(activity).forEach(([key, value]) => {
      if (
        key !== 'id' &&
        key !== 'content' &&
        key !== 'date' &&
        key !== 'time' &&
        key !== 'user_id'
      ) {
        const cell = row.insertCell()
        cell.textContent = value
      }
    })
    const detailsCell = row.insertCell()
    const showDetailsButton = document.createElement('button')
    showDetailsButton.textContent = 'Show Details'
    detailsCell.appendChild(showDetailsButton)

    showDetailsButton.addEventListener('click', () => {
      // Function to show details when the button is clicked
      showDetails(activity)
    })
  })
}

function showDetails (activity) {
  window.location.assign('details.html')

  const title = activity.title
  const content = activity.content
  const time = activity.timestamp
  const category = activity.category
  const id = activity.id
  const userId = activity.user_id

  // You can now pass the 'title' to the details.html page or use it as needed
  // For example, you might want to store it in localStorage, pass it as a query parameter, etc.
  localStorage.setItem('id', id)
  localStorage.setItem('title', title)
  localStorage.setItem('content', content)
  localStorage.setItem('time', time)
  localStorage.setItem('category', category)
 
}

const signout = document.getElementById('sign-out')


if (signout) {
  signout.addEventListener('click', logout)

}
function logout() {
  const userConfirmed = confirm('Are you sure you want to sign out?')

  if (userConfirmed) {
    localStorage.clear()
    window.location.assign('index.html')
  }
}
document.addEventListener('DOMContentLoaded', fetchEntries)
