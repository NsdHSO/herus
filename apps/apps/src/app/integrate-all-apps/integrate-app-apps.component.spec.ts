import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrateAppAppsComponent } from './integrate-app-apps.component';

describe('IntegrateAppAppsComponent', () => {
  let component: IntegrateAppAppsComponent;
  let fixture: ComponentFixture<IntegrateAppAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrateAppAppsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrateAppAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
