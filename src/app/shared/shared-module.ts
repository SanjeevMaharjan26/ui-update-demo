import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';

import { NxPageHeaderComponent } from './components/layout/nx-page-header/nx-page-header';
import { NxActionBarComponent } from './components/layout/nx-action-bar/nx-action-bar';
import { NxCardComponent } from './components/layout/nx-card/nx-card';
import { NxGridComponent } from './components/data-display/nx-grid/nx-grid';
import { NxBadgeComponent } from './components/data-display/nx-badge/nx-badge';
import { NxStatusChipComponent } from './components/data-display/nx-status-chip/nx-status-chip';
import { NxEmptyStateComponent } from './components/data-display/nx-empty-state/nx-empty-state';
import { NxFormFieldDirective } from './directives/nx-form-field.directive';
import { NxDialogFormWrapperComponent } from './components/form/nx-dialog-form-wrapper/nx-dialog-form-wrapper';
import { StatusLabelPipe } from './pipes/status-label.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';

const MATERIAL_MODULES = [
  MatTableModule, MatPaginatorModule, MatSortModule,
  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatButtonModule, MatIconModule, MatChipsModule,
  MatCardModule, MatTabsModule, MatCheckboxModule,
  MatDatepickerModule, MatNativeDateModule,
  MatSlideToggleModule, MatDialogModule, MatSnackBarModule,
  MatProgressSpinnerModule, MatTooltipModule, MatMenuModule,
  MatDividerModule, MatToolbarModule, MatBadgeModule,
  MatListModule, MatExpansionModule, MatAutocompleteModule,
  MatStepperModule,
];

@NgModule({
  declarations: [
    NxPageHeaderComponent, NxActionBarComponent, NxCardComponent,
    NxGridComponent, NxBadgeComponent, NxStatusChipComponent,
    NxEmptyStateComponent,
    NxFormFieldDirective, NxDialogFormWrapperComponent,
    StatusLabelPipe, TruncatePipe, HighlightDirective,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ...MATERIAL_MODULES],
  exports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule,
    ...MATERIAL_MODULES,
    NxPageHeaderComponent, NxActionBarComponent, NxCardComponent,
    NxGridComponent, NxBadgeComponent, NxStatusChipComponent,
    NxEmptyStateComponent,
    NxFormFieldDirective, NxDialogFormWrapperComponent,
    StatusLabelPipe, TruncatePipe, HighlightDirective,
  ],
})
export class SharedModule {}
