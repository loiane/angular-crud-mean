import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [ErrorDialogComponent, ConfirmationDialogComponent],
  exports: [ErrorDialogComponent, ConfirmationDialogComponent],
  entryComponents: [ErrorDialogComponent, ConfirmationDialogComponent]
})
export class SharedModule { }
