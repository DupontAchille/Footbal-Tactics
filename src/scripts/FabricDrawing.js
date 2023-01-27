var canvas = new fabric.Canvas('c', {
  width: 850,
  height: 560,
})

let addingLineBtn = document.getElementById('adding-line-btn')

addingLineBtn.addEventListener('click', activeAddingLine())

var fromx, fromy, tox, toy
function activeAddingLine() {
  this.canvas.on('mouse:down', function (event) {
    var pointer = this.canvas.getPointer(event.e)
    fromx = pointer.x
    fromy = pointer.y
  })
  this.canvas.on('mouse:up', function (event) {
    var pointer = this.canvas.getPointer(event.e)
    tox = pointer.x
    toy = pointer.y
    //this.drawArrow(startX, startY, endX, endY);

    var angle = Math.atan2(toy - fromy, tox - fromx)

    var headlen = 10 // arrow head size

    // bring the line end back some to account for arrow head.
    tox = tox - headlen * Math.cos(angle)
    toy = toy - headlen * Math.sin(angle)

    // calculate the points.
    var points = [
      {
        x: fromx, // start point
        y: fromy,
      },
      {
        x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox - headlen * Math.cos(angle - Math.PI / 2),
        y: toy - headlen * Math.sin(angle - Math.PI / 2),
      },
      {
        x: tox + headlen * Math.cos(angle), // tip
        y: toy + headlen * Math.sin(angle),
      },
      {
        x: tox - headlen * Math.cos(angle + Math.PI / 2),
        y: toy - headlen * Math.sin(angle + Math.PI / 2),
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
      },
      {
        x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2),
      },
      {
        x: fromx,
        y: fromy,
      },
    ]

    var pline = new fabric.Polyline(points, {
      fill: color, //'white',
      stroke: color, //'black',
      opacity: 1,
      strokeWidth: 1,
      originX: 'left',
      originY: 'top',
      selectable: true,
    })

    this.add(pline)

    this.isDown = false
    this.off('mouse:down').off('mouse:move').off('mouse:up')

    this.renderAll()
  })
}
