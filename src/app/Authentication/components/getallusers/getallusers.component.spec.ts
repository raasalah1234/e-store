import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallusersComponent } from './getallusers.component';

describe('GetallusersComponent', () => {
  let component: GetallusersComponent;
  let fixture: ComponentFixture<GetallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
