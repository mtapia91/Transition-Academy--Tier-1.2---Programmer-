using System;
using System.Collections.Generic;

namespace BankAccountMVC
{
    class Savings: Account, ICalculateInterest2      //TODO inherit parent class
    {
        public double annualSavingsFee        // annual fee property  //supposed to be an interest %
        { get; set; }

        public Savings() : base()        //TODO constructor w/o parameters
        {
            annualSavingsFee = 0.0;
        }
        // ====vvv==== constructor w/ parameters ====vvv==== \\
        public Savings(string newAccountHolderName, string newAccountType, string newAccountNumber, double newAccountBalance, double newAnnualSavingsFee) : base(newAccountHolderName, newAccountType, newAccountNumber, newAccountBalance)
        {
            annualSavingsFee = newAnnualSavingsFee;
        }
        public override void makeWithdraw(double withdrawalAmount)
        {
            accountBalance = accountBalance - withdrawalAmount;
        }

        public double CalculateInterest()      // this is implementing ICalculateInterest interface
        {
            return annualSavingsFee * accountBalance;
        }

        public override string ToString()      // base ToString + savings class ToString
        {
            return base.ToString() + "\nSavings annual fee: $" + annualSavingsFee + "\nAnnual interest: " + CalculateInterest();
        }

        //TODO base ToString + savings class ToString

    }       // end class
}
