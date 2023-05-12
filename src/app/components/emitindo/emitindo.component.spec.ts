import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitindoComponent } from './emitindo.component';

describe('EmitindoComponent', () => {
  let component: EmitindoComponent;
  let fixture: ComponentFixture<EmitindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitindoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
