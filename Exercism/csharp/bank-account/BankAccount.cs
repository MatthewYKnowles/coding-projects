using System;

public class BankAccount
{
    private decimal _balance;
    private AccountStatus _accountStatus = AccountStatus.Closed;

    public decimal Balance
    {
        get
        {
            VerifyAccountStatus();
            return _balance;
        }
    }

    public void Open() => _accountStatus = AccountStatus.Open;

    public void Close() => _accountStatus = AccountStatus.Closed;

    public void UpdateBalance(decimal amount) => _balance += amount;
    
    private void VerifyAccountStatus()
    {
        if (_accountStatus == AccountStatus.Closed)
        {
            throw new InvalidOperationException();
        }
    }
}

public enum AccountStatus
{
    Open,
    Closed
}
