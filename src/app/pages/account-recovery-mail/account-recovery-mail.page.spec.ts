import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountRecoveryMailPage } from './account-recovery-mail.page';

describe('AccountRecoveryMailPage', () => {
  let component: AccountRecoveryMailPage;
  let fixture: ComponentFixture<AccountRecoveryMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRecoveryMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountRecoveryMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
