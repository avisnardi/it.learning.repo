import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListControlComponent } from './song-list-control.component';

describe('SongListControlComponent', () => {
  let component: SongListControlComponent;
  let fixture: ComponentFixture<SongListControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
