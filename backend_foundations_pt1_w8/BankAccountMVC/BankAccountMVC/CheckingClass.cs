using System;
using System.Collections.Generic;

namespace BankAccountMVC
{
    class Checking: Account         // inherit parent class
    {

        public static double monthlyCheckingFee         // annual checking fee property
        { get; set; }

        public Checking() : base ()     // constructor w/o parameters
        {
            monthlyCheckingFee = 0;
        }
                        //======vvv===== constructor w/ parameters ======vvv=====\\
        public Checking (string newAccountHolderName, string newAccountType, string newAccountNumber, double newAccountBalance, double newMonthlyCheckingFee): base (newAccountHolderName, newAccountType, newAccountNumber, newAccountBalance)
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
