import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalhaComponent } from './talha.component';

describe('TalhaComponent', () => {
  let component: TalhaComponent;
  let fixture: ComponentFixture<TalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
