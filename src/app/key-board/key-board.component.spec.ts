import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyBoardComponent } from './key-board.component';

describe('KeyBoardComponent', () => {
  let component: KeyBoardComponent;
  let fixture: ComponentFixture<KeyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
