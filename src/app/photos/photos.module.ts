import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { Routes, RouterModule} from '@angular/router';
import { MatButtonModule} from '@angular/material/button'
import { SharedModule } from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes:Routes =[
  {path:'', component:PhotoListComponent}
]

@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatProgressSpinnerModule

  ]
})
export class PhotosModule { }
