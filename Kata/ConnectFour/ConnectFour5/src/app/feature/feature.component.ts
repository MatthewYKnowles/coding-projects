import {Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'feature',
    templateUrl: 'feature.component.html'
})
export class FeatureComponent implements AfterViewInit {

    context: CanvasRenderingContext2D;

    @ViewChild("myCanvas") myCanvas: any;

    ngAfterViewInit(): void {
        console.log(this.myCanvas);
        this.context = this.myCanvas.nativeElement.getContext("2d");
        this.drawPiece(7, 6);
    }

    drawPiece(row: number, column: number) {
        let ctx = this.context;
        let radius = 45;
        let startAngle = 0;
        let finishAngle = 2 * Math.PI;
        let yAxisCenterPoint = 550;
        let xAxisCenterPoint = 50;
        ctx.beginPath();
        ctx.arc(xAxisCenterPoint, yAxisCenterPoint, radius, startAngle, finishAngle);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}