var checkbox = document.getElementById('ChangeTheme') //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem('mode') == 'worldcup') {
  worldcupmode() //if dark mode was on, run this funtion
} else {
  normalmode() //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener('change', function () {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    worldcupmode() //if the checkbox is checked, run this funtion
  } else {
    normalmode() //else run this funtion
  }
})

//function for checkbox when checkbox is checked
function worldcupmode() {
  document.body.classList.add('worldcup-mode') //add a class to the body tag
  checkbox.checked = true //set checkbox to be checked state
  sessionStorage.setItem('mode', 'worldcup') //store a name & value to know that dark mode is on
  document.getElementById('pitch').src = '/FootballPitchQatar.svg'
  document.getElementsByClassName('regularball')[0].style.display = 'none'
  document.getElementsByClassName('qatarball')[0].style.display = 'block'
}

//function for checkbox when checkbox is not checked
function normalmode() {
  document.body.classList.remove('worldcup-mode') //remove added class from body tag
  checkbox.checked = false //set checkbox to be unchecked state
  sessionStorage.setItem('mode', 'normal') //store a name & value to know that dark mode is off or light mode is on
  document.getElementById('pitch').src = '/FootballPitch.svg'
  document.getElementsByClassName('qatarball')[0].style.display = 'none'
  document.getElementsByClassName('regularball')[0].style.display = 'block'
}
