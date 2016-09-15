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
        let context = this.context;
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 150, 150);
    }
}