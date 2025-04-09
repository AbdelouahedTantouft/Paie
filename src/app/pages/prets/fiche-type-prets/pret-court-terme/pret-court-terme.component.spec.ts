import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretCourtTermeComponent } from './pret-court-terme.component';

describe('PretCourtTermeComponent', () => {
  let component: PretCourtTermeComponent;
  let fixture: ComponentFixture<PretCourtTermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PretCourtTermeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretCourtTermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
