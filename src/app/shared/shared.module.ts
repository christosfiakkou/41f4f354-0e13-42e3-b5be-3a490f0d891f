// src/app/shared/shared.module.ts
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';
import { MatCardModule }        from '@angular/material/card';
import { MatIconModule }        from '@angular/material/icon';      // ← add this
import { MatButtonModule }      from '@angular/material/button';
import { MatToolbarModule }     from '@angular/material/toolbar';

import { HeaderComponent }      from './header/header.component';
import { PhotoCardComponent }   from './photo-card/photo-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PhotoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,        // ← add this
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    PhotoCardComponent,
    MatIconModule         // ← also export if you use mat-icon elsewhere
  ]
})
export class SharedModule {}
