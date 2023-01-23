const srcElement = document.getElementById('screenshot')

const btn = document.getElementById('screenshotbutton')
// adding click event to each btn
btn.addEventListener('click', () => {
  // creating canvas of element using html2canvas
  html2canvas(srcElement).then((canvas) => {
    // adding canvas/screenshot to the body
    if (btn.id === 'take-src-only') {
      return document.body.appendChild(canvas)
    }
    // downloading canvas/screenshot
    const a = document.createElement('a')
    a.href = canvas.toDataURL()
    a.download = document.getElementById('screenshotname').value
    a.click()
  })
})

//record function
// function startRecording() {
//   var div = document.getElementById('screenshot')

//   html2canvas(div).then(function (canvas) {
//     var video = document.createElement('video')
//     video.src = canvas.toDataURL()
//     var options = {
//       type: 'video',
//       video: video,
//     }

//     var recordRTC = RecordRTC(canvas, options)
//     recordRTC.startRecording()

//     //Stop recording after a certain amount of time
//     setTimeout(function () {
//       recordRTC.stopRecording(function (videoURL) {
//         var recordedVideo = document.createElement('video')
//         recordedVideo.src = videoURL
//         document.body.appendChild(recordedVideo)
//         recordedVideo.play()
//       })
//     }, 10000)
//   })
// }
// document.getElementById('screenrecord').addEventListener('click', () => {
//   startRecording()
// })
