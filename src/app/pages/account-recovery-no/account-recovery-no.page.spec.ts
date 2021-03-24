import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountRecoveryNoPage } from './account-recovery-no.page';

describe('AccountRecoveryNoPage', () => {
  let component: AccountRecoveryNoPage;
  let fixture: ComponentFixture<AccountRecoveryNoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRecoveryNoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountRecoveryNoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
