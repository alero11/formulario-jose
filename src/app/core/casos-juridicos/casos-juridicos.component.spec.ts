import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosJuridicosComponent } from './casos-juridicos.component';

describe('CasosJuridicosComponent', () => {
  let component: CasosJuridicosComponent;
  let fixture: ComponentFixture<CasosJuridicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosJuridicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosJuridicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
