import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalViewComponent } from './project-modal-view.component';

describe('ProjectModalViewComponent', () => {
  let component: ProjectModalViewComponent;
  let fixture: ComponentFixture<ProjectModalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModalViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
