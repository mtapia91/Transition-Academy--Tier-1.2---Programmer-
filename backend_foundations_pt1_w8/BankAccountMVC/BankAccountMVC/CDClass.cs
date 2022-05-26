using System;
using System.Collections.Generic;

namespace BankAccountMVC
{
    class CD : Account, ICalculateInterest2      // inherit parent class
    {
        public double annualInterestRate        // annual interest rate property
        { get; set; }

        public double penaltyWD     // set WD penalty property
        { get; set; }

        public CD() : base()        // constructor w/o parameters
        {
            annualInterestRate = 0.0;
            penaltyWD = 0.0;
        }
        // ====vvv==== constructor w/ parameters ====vvv==== \\
        public CD(string newAccountHolderName, string newAccountType, string newAccountNumber, double newAccountBalance, double newAnnualInterestRate, double newPenaltyWD) : base(newAccountHolderName, newAccountType, newAccountNumber, newAccountBalance)
        {
            annualInterestRate = newAnnualInterestRate;
            penaltyWD = newPenaltyWD;
        }
        public override void makeWithdraw(double withdrawalAmount)
        {
            accountBalance = accountBalance - withdrawalAmount;
        }
        public double CalculateInterest()      // this is implementing ICalculateInterest interface
        {
            return annualInterestRate * accountBalance;
        }

        public override string ToString()      // base ToString + check class ToString
        {
            return base.ToString() + "\nCD annual interest rate: " + annualInterestRate + "%\nPenalty for early withdrawal: $" + penaltyWD + "\nAnnual interest: " + CalculateInterest();
        }

    }// class end
}
