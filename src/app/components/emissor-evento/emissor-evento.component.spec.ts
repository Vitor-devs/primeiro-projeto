import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissorEventoComponent } from './emissor-evento.component';

describe('EmissorEventoComponent', () => {
  let component: EmissorEventoComponent;
  let fixture: ComponentFixture<EmissorEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissorEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissorEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
