import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfieComponent } from './list-profie.component';

describe('ListProfieComponent', () => {
  let component: ListProfieComponent;
  let fixture: ComponentFixture<ListProfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
