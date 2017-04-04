import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OptComponent } from './opt.component';

import { DISToolsRouting } from './distools.routing';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DISToolsRouting
    ],
    declarations: [
        OptComponent,
    ],
    providers: [
    ]
})

export class DISToolsModule {}