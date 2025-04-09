import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTypePretsComponent } from './fiche-type-prets.component';

describe('FicheTypePretsComponent', () => {
  let component: FicheTypePretsComponent;
  let fixture: ComponentFixture<FicheTypePretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheTypePretsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheTypePretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
