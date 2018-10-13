import { DebtorsModule } from './debtors.module';

describe('DebtorsModule', () => {
  let debtorsModule: DebtorsModule;

  beforeEach(() => {
    debtorsModule = new DebtorsModule();
  });

  it('should create an instance', () => {
    expect(debtorsModule).toBeTruthy();
  });
});
