import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFeedComponent } from './global-feed.component';

describe('GlobalFeedComponent', () => {
  let component: TagFeedComponent;
  let fixture: ComponentFixture<TagFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
