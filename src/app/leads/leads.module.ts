import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { LeadsDownloadPdfComponent } from './leads-listing/leads-download-pdf/leads-download-pdf.component';
import { LeadsDownloadExcelComponent } from './leads-listing/leads-download-excel/leads-download-excel.component';



@NgModule({
  declarations: [
    LeadsListingComponent,
    LeadsGridComponent,
    LeadsToolsComponent,
    LeadsDownloadPdfComponent,
    LeadsDownloadExcelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
