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

import { NxPageHeaderComponent } from './components/nx-page-header/nx-page-header';
import { NxCardComponent } from './components/nx-card/nx-card';
import { NxBadgeComponent } from './components/nx-badge/nx-badge';
import { NxStatusChipComponent } from './components/nx-status-chip/nx-status-chip';
import { NxTableComponent } from './components/nx-table/nx-table';
import { NxDataGridComponent } from './components/nx-data-grid/nx-data-grid';
import { NxFormFieldWrapperComponent } from './components/nx-form-field-wrapper/nx-form-field-wrapper';
import { NxActionBarComponent } from './components/nx-action-bar/nx-action-bar';
import { NxEmptyStateComponent } from './components/nx-empty-state/nx-empty-state';
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

const NX_COMPONENTS = [
  NxPageHeaderComponent, NxCardComponent, NxBadgeComponent,
  NxStatusChipComponent, NxTableComponent, NxDataGridComponent,
  NxFormFieldWrapperComponent, NxActionBarComponent, NxEmptyStateComponent,
];

@NgModule({
  declarations: [...NX_COMPONENTS, StatusLabelPipe, TruncatePipe, HighlightDirective],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ...MATERIAL_MODULES],
  exports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule,
    ...MATERIAL_MODULES,
    ...NX_COMPONENTS,
    StatusLabelPipe, TruncatePipe, HighlightDirective,
  ],
})
export class SharedModule {}
