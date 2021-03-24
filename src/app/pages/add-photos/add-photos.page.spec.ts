import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPhotosPage } from './add-photos.page';

describe('AddPhotosPage', () => {
  let component: AddPhotosPage;
  let fixture: ComponentFixture<AddPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
