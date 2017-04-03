import { Component,Input } from '@angular/core';
//entities
import { Application } from '../../entities/application';
@Component({
    moduleId: module.id,
    selector: 'view-img',
    template: `<img [src]="srcString" />`,
    // templateUrl: 'sync-main.component.html',
})
export class PhotoViewerComponent  { 
    @Input() srcString : string; //this handles the path of the image
}