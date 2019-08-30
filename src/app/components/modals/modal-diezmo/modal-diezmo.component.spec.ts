import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDiezmoComponent } from './modal-diezmo.component';

describe('ModalDiezmoComponent', () => {
  let component: ModalDiezmoComponent;
  let fixture: ComponentFixture<ModalDiezmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDiezmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDiezmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
