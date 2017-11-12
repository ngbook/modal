import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplContentComponent } from './tpl-content.component';

describe('TplContentComponent', () => {
  let component: TplContentComponent;
  let fixture: ComponentFixture<TplContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
