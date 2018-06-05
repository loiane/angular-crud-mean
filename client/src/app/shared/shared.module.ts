import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [ErrorDialogComponent],
  exports: [ErrorDialogComponent],
  entryComponents: [ErrorDialogComponent]
})
export class SharedModule { }
