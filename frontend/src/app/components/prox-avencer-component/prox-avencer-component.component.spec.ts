import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxAvencerComponentComponent } from './prox-avencer-component.component';

describe('ProxAvencerComponentComponent', () => {
  let component: ProxAvencerComponentComponent;
  let fixture: ComponentFixture<ProxAvencerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProxAvencerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProxAvencerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
