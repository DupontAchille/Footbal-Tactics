// The current position of mouse
let x = 0
let y = 0

for (let i = 1; i < 12; i++) {
  // Query the element
  const left = document.getElementById('teamright' + i.toString())
  console.log(left)
  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX
    y = e.clientY
    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    left.style.position = 'absolute'
  }

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x
    const dy = e.clientY - y

    // Set the position of element
    left.style.top = `${left.offsetTop + dy}px`
    left.style.left = `${left.offsetLeft + dx}px`

    // Reassign the position of mouse
    x = e.clientX
    y = e.clientY
  }

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  left.addEventListener('mousedown', mouseDownHandler)
}

for (let i = 1; i < 12; i++) {
  // Query the element
  const left = document.getElementById('teamleft' + i.toString())
  console.log(left)
  // Handle the mousedown event
  // that's triggered when user drags the element
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX
    y = e.clientY
    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    // left.style.position = 'absolute'
  }

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x
    const dy = e.clientY - y

    // Set the position of element
    left.style.top = `${left.offsetTop + dy}px`
    left.style.left = `${left.offsetLeft + dx}px`

    // Reassign the position of mouse
    x = e.clientX
    y = e.clientY
  }

  const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  left.addEventListener('mousedown', mouseDownHandler)
}

const ball = document.getElementById('soccerball')
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
  ball.style.top = `${ball.offsetTop + dy}px`
  ball.style.left = `${ball.offsetLeft + dx}px`

  // Reassign the position of mouse
  x = e.clientX
  y = e.clientY
}

const mouseUpHandler = function () {
  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
}
ball.addEventListener('mousedown', mouseDownHandler)
