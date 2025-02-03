import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLineComponent } from './box-line.component';

describe('BoxLineComponent', () => {
  let component: BoxLineComponent;
  let fixture: ComponentFixture<BoxLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
