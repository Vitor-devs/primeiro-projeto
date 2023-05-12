import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebedorEventoComponent } from './recebedor-evento.component';

describe('RecebedorEventoComponent', () => {
  let component: RecebedorEventoComponent;
  let fixture: ComponentFixture<RecebedorEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebedorEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecebedorEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
