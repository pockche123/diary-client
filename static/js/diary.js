// Get the table body
const tableBody = document.querySelector('#activityTable tbody')

const fetchEntries = async (selectedCategory = '') => {
  const username = localStorage.getItem('username')

  await fetch(`http://localhost:3000/diary/user/${username}`)
    .then(resp => resp.json())
    .then(data => showEntries(data, selectedCategory))
    .catch(e => console.log(e))
}

fetchEntries()

const categorySelect = document.getElementById('category')
categorySelect.addEventListener('change', () =>
  fetchEntries(categorySelect.value)
)

function showEntries(activityData, selectedCategory) {
  tableBody.innerHTML = ''
  let filteredData =
    selectedCategory.length > 0
      ? activityData.filter(item => item.category === selectedCategory)
      : activityData

  filteredData.forEach(activity => {
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

function showDetails(activity) {
  window.location.assign('details.html')

  const title = activity.title
  const content = activity.content
  const time = activity.timestamp
  const category = activity.category
  const id = activity.id

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
