import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`generic-vid.component.html`
})
export class TLComponent  {
    //path:string = 'resources/mock/videoplayback.mp4';
    path:string = 'resources/workplace/03LEADERS/gk.mp4';
    breadcrumbs =['Leaders\' Video' ,'Team Leader'];
}
