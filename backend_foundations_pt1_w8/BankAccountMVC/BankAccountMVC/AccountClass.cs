using System;
using System.Collections.Generic;

namespace BankAccountMVC
{
    abstract class Account      // make base class abstract \n TODO inherit interface
    {
        public double accountBalance
        { get; set; }
        public string accountHolderName     //  name get/set
        { get; set; }

        public string accountNumber        //  acct ID get/set
        { get; set; }

        public string accountType        //  acct type get/set
        { get; set; }
    
        public Account()        // constructor w/o parameters
        {
            accountHolderName = "";
            accountType = "";
            accountBalance = 0;
            accountNumber = "";           
        }

        public Account (string newAccountHolderName, string newAccountType, string newAccountNumber, double newAccountBalance)        // constructor w/ parameters
        {
            accountHolderName = newAccountHolderName;
            accountType = newAccountType;
            accountNumber = newAccountNumber;
            accountBalance = newAccountBalance;
        }

        public void makeDeposit(double depositAmount)
        {
            accountBalance = accountBalance + depositAmount;
        }

        public abstract void makeWithdraw(double withdrawalAmount);

        public override string ToString()
        {
            return "\nAccount holder: " + accountHolderName + "\nAccount type: " + accountType + "\nAccount number: " + accountNumber + "\nAccount balance: $" + accountBalance;
        }

    }       //end class
}       //end namespace





                                                                    /*  public double depositAmount     //unsure to keep this
                                                                        { get; set; }

                                                                        public double withdrawalAmount      //unsure to keep this
                                                                        { get; set; } */