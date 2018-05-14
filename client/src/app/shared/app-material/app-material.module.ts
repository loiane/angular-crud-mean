import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [...modules]
})
export class AppMaterialModule { }
