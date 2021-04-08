import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareMyFeedsPage } from './share-my-feeds.page';

describe('ShareMyFeedsPage', () => {
  let component: ShareMyFeedsPage;
  let fixture: ComponentFixture<ShareMyFeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMyFeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareMyFeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
