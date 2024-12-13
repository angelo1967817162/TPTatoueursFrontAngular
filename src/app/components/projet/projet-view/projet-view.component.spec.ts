import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetViewComponent } from './projet-view.component';

describe('ProjetViewComponent', () => {
  let component: ProjetViewComponent;
  let fixture: ComponentFixture<ProjetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
