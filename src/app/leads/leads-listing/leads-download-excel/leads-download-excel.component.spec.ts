import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDownloadExcelComponent } from './leads-download-excel.component';

describe('LeadsDownloadExcelComponent', () => {
  let component: LeadsDownloadExcelComponent;
  let fixture: ComponentFixture<LeadsDownloadExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDownloadExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDownloadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
