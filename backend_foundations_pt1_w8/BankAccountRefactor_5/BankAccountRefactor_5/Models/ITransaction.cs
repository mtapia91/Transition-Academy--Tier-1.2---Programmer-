namespace BankAccountRefactor_5.Models
{
    public interface ITransaction
    {
        void Deposit(double depositAmount);      //declare define deposit method
        void Withdrawal(double withdrawalAmount);    // declare defined withdraw
    }
}
