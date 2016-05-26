 'use strict';

var canvas;
var itemCount = 0;

$(document).ready( function () {
  canvas = new fabric.Canvas('c3');
});

function addCircle() {
  canvas.add(new fabric.Circle({ fill: 'yellow',radius: 25,  left: 50, top: 50 }));

  canvas.item(itemCount).set({
    borderColor: 'red',
    cornerColor: 'green',
    cornerSize: 6,
    transparentCorners: false
  });
  canvas.setActiveObject(canvas.item(itemCount));

  itemCount++;
}

function addTriangle() {
  canvas.add(new fabric.Triangle({ fill: 'blue', width: 50, height: 50, left: 250, top: 250}));

  canvas.item(itemCount).set({
    borderColor: 'red',
    cornerColor: 'green',
    cornerSize: 6,
    transparentCorners: false
  });
  canvas.setActiveObject(canvas.item(itemCount));

  itemCount++;
}

function addRect() {
  canvas.add(new fabric.Rect({ fill: 'red', width: 50, height: 50, left: 150, top: 150 }));

  canvas.item(itemCount).set({
    borderColor: 'red',
    cornerColor: 'green',
    cornerSize: 6,
    transparentCorners: false
  });
  canvas.setActiveObject(canvas.item(itemCount));

  itemCount++;
}

function deleteItem() {
  canvas.getActiveObject().remove();
}
