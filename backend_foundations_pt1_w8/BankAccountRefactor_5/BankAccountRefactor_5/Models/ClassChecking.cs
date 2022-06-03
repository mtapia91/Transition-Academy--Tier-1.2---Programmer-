namespace BankAccountRefactor_5.Models
{
    public class ClassChecking : ClassAccount         // inherit parent class
    {

        public static double monthlyCheckingFee         // annual checking fee property
        { get; set; }

        public ClassChecking() : base()     // constructor w/o parameters
        {
            monthlyCheckingFee = 0;
        }
        //======vvv===== constructor w/ parameters ======vvv=====\\
        public ClassChecking(string newAccountHolderName, string newAccountType, string newAccountNumber, double newAccountBalance, double newMonthlyCheckingFee) : base(newAccountHolderName, newAccountType, newAccountNumber, newAccountBalance)
        {
            monthlyCheckingFee = newMonthlyCheckingFee;
        }
        public override void makeWithdraw(double withdrawalAmount)
        {
            accountBalance = accountBalance - withdrawalAmount;
        }
        //public double balanceWithFeeDeduction = (monthlyCheckingFee - balance);         // method to calculate checking fee

        public override string ToString()      // base ToString + check class ToString
        {
            return base.ToString() + "\nMonthly checking fee: $: " + monthlyCheckingFee;  //"\nAccount balance (with fee deducted): $" + balanceWithFeeDeduction
        }
    }       //end class
}

