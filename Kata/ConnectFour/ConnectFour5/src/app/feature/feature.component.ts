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
        this.drawPiece();
    }

    drawPiece() {
        let ctx = this.context;
        ctx.beginPath();
        ctx.arc(50,550,50,0,2*Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

}