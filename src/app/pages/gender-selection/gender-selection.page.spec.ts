import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenderSelectionPage } from './gender-selection.page';

describe('GenderSelectionPage', () => {
  let component: GenderSelectionPage;
  let fixture: ComponentFixture<GenderSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenderSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
