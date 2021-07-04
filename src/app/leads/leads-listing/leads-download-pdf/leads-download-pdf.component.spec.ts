import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDownloadPdfComponent } from './leads-download-pdf.component';

describe('LeadsDownloadPdfComponent', () => {
  let component: LeadsDownloadPdfComponent;
  let fixture: ComponentFixture<LeadsDownloadPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDownloadPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDownloadPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
