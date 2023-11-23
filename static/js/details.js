
document.addEventListener('DOMContentLoaded', function () {
    const detailsTitle = localStorage.getItem('title');
    const detailsContent = localStorage.getItem('content'); 
    const detailsTime = localStorage.getItem('time'); 
    const detailsCategory = localStorage.getItem('category')

    const titleElement = document.getElementById('detail-title');
    const content = document.getElementById('detail-content');
    const time = document.getElementById('detail-time');
       const category = document.getElementById('detail-category');

    if (detailsTitle && titleElement) {
        titleElement.textContent = detailsTitle;
    }

    if (detailsContent && content) {
        content.value = detailsContent;
    }

    if (detailsTime && time) {
        time.value = detailsTime;
    }

    if (detailsCategory && category) {

for (let i = 0; i < category.options.length; i++) {
  if (category.options[i].value === detailsCategory) {
    category.options[i].selected = true;
    break;  // Stop the loop once we've found and selected the matching option
  }
}
    }

});

const back = document.getElementById('go-back')
const updateButton = document.getElementById('update')
const deleteButton = document.getElementById('delete')

back.addEventListener('click', goBack)

function goBack() {
    console.log("cancel clicked")
    window.location.assign('diary.html')
}


updateButton.addEventListener('click', doUpdate)
deleteButton.addEventListener('click', doDelete)

function doUpdate() {
    
   let userConfirmed= confirm('Please confirm that you would like to update your diary entry:')

    if (userConfirmed) {
        window.location.assign('diary.html')
    }
}

function doDelete() {

    let userConfirmed= confirm('Are you sure you want to delete your diary entry?')

    if (userConfirmed) {
        window.location.assign('diary.html')
    }
    
}

