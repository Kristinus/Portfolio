import { Component, OnInit } from '@angular/core';

export class Point {
  x: number;
  y: number;
  distance: number;
  radius: number;
  velocity: number;
  opacity: number;

  constructor(x,y,distance){
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.radius = 2*distance;
    this.velocity = distance*(1+Math.random());
    this.opacity = 1 - this.distance/10;

    return this;
  }

  draw(context) {
    var _radgrad = context.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
    _radgrad.addColorStop(0, 'rgba(0,0,0,' + this.opacity + ')');
    _radgrad.addColorStop(0.1, 'rgba(0,0,0,' + this.opacity + ')');
    _radgrad.addColorStop(1, 'rgba(0,0,0,0)');

    context.fillStyle = _radgrad;
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,2*Math.PI);
    context.closePath();
    context.fill();
  }
}

@Component({
  selector: 'app-snow-background',
  templateUrl: './snow-background.component.html',
  styleUrls: ['./snow-background.component.scss']
})
export class SnowBackgroundComponent implements OnInit {
  canvas: any;
  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('background');
    var context = this.canvas.getContext('2d');

    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame;


    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas, false);

    this.resizeCanvas();

    var points = [],
        sizeX = this.canvas.width,
        sizeY = this.canvas.height,
        gravity = 0.1;

    var loop = function loop(data){
        clearCanvas();
        var pointsArray = [];

        for (var j=0; j < points.length; j++) {
            var point = points[j];

            if (point.y + point.velocity < sizeY + 20) {
                point.draw(context);
                point.y += point.velocity*gravity;
                pointsArray.push(point);
            } else {
                var p = new Point(Math.random()*sizeX, -20, point.distance);
                pointsArray.push(p);
            }
        }

        points = pointsArray;

        if (points.length) {
            requestAnimationFrame(loop);
        }
    };

    for (var k=0; k < 50; k++) {
        var p_big = new Point(Math.random()*sizeX, Math.random()*sizeY, 5 + Math.random()*3);
        points.push(p_big);

        var p_small = new Point(Math.random()*sizeX, Math.random()*sizeY, 1 + Math.random()*3);
        points.push(p_small);

        var p_tiny = new Point(Math.random()*sizeX, Math.random()*sizeY, Math.random()*3);
        points.push(p_tiny);
    }

    requestAnimationFrame(loop);

    var clearCanvas = function clearCanvas(){
        context.clearRect(0,0,sizeX,sizeY);
    }
  }

  resizeCanvas() {
   this.canvas.width = window.innerWidth;
   this.canvas.height = window.innerHeight;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     */
}

}
