import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongControlComponent } from './song-control.component';

describe('SongControlComponent', () => {
  let component: SongControlComponent;
  let fixture: ComponentFixture<SongControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
