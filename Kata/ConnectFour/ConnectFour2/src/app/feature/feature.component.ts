import {Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id, 
    selector: 'feature',
    templateUrl: 'feature.component.html'
})
export class FeatureComponent implements AfterViewInit {

    context: CanvasRenderingContext2D;

    @ViewChild("myCanvas") myCanvas;

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
//
//     tick() {
//         // 本当はデータ変更時のみ呼び出したい
//         requestAnimationFrame(()=> {
//             this.tick()
//         });
//
//         var ctx = this.context;
//         ctx.clearRect(0, 0, 400, 400);
//         ctx.fillStyle = this.rectColor;
//         ctx.fillRect(0, 0, this.rectW, this.rectH);
//     }
// }
//
// bootstrap(AppComponent, []);