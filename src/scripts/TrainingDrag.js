// The current position of mouse
let x = 0
let y = 0

for (let i = 1; i < 31; i++) {
  // Query the element
  const trainingcone = document.getElementById('trainingcone' + i.toString())
  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX
    y = e.clientY
    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    console.log(x, y)
  }
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x
    const dy = e.clientY - y

    // Set the position of element
    trainingcone.style.top = `${trainingcone.offsetTop + dy}px`
    trainingcone.style.left = `${trainingcone.offsetLeft + dx}px`

    // Reassign the position of mouse
    x = e.clientX
    y = e.clientY
  }

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }
  trainingcone.addEventListener('mousedown', mouseDownHandler)
}
for (let i = 1; i < 31; i++) {
  // Query the element
  const traininghurdle = document.getElementById(
    'traininghurdle' + i.toString(),
  )
  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX
    y = e.clientY
    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    console.log(x, y)
  }
  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x
    const dy = e.clientY - y

    // Set the position of element
    traininghurdle.style.top = `${traininghurdle.offsetTop + dy}px`
    traininghurdle.style.left = `${traininghurdle.offsetLeft + dx}px`

    // Reassign the position of mouse
    x = e.clientX
    y = e.clientY
  }

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }
  traininghurdle.addEventListener('mousedown', mouseDownHandler)
}
