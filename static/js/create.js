const cancel = document.getElementById('cancel')
  
cancel.addEventListener('click', goBack)
  
function goBack() {
    console.log("cancel clicked")
    window.location.assign('diary.html')
}

const createButton = document.getElementById('create')

if (createButton) {
    createButton.addEventListener('click', createEntry)
}

async function createEntry(e) {
    e.preventDefault()

    const createContent = document.getElementById('create-content')
    const createCategory = document.getElementById('create-category')
    const createTitle = document.getElementById('create-title')
    const userId = localStorage.getItem('user_id')
    console.log('userId ', userId)
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: createTitle.value,
            content: createContent.value,
            category: createCategory.value,
            user_id: parseInt(userId)
        })
    }

    const response = await fetch('http://localhost:3000/diary', options)
    
      if (response.status == 201) {
          alert('New diary has been created')
          window.location.assign('diary.html')
  } else {
    console.log(error)
    alert('ERROR CREATING NEW ENTRY')
  }
    
}