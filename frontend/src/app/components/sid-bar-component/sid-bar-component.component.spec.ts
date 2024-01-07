import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidBarComponentComponent } from './sid-bar-component.component';

describe('SidBarComponentComponent', () => {
  let component: SidBarComponentComponent;
  let fixture: ComponentFixture<SidBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidBarComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
