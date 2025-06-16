import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 




const routes:Routes =[
  {path:'', component:FavoritesListComponent},
  {path:'photos/:id', component:PhotoDetailComponent}
]


@NgModule({
  declarations: [
    FavoritesListComponent,
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class FavoritesModule { }
