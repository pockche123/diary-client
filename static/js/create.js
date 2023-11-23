const cancel = document.getElementById('cancel')
  
cancel.addEventListener('click', goBack)
  
function goBack() {
    console.log("cancel clicked")
    window.location.assign('diary.html')
}