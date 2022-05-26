using System;
using System.Collections.Generic;


namespace BankAccountMVC
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Account> accountList = new List<Account>();        // create account list for test data

            /* accountList.Add(new Account ("Ivan Santigo", "TEST", "6543210"));      // hard code Account Class test data including fees/rates/penalties

            accountList.Add(new Account ("Santos Silva", "TEST", "9784698")); */

            accountList.Add(new Checking ("Anthony Birch", "Checking", "6546284", 9564.46, 8.00));

            accountList.Add(new Checking ("Simone Meadow", "Checking", "5487461", 3215.57, 7.75));

            accountList.Add(new Savings ("Dayami Fields", "Savings", "8452540", 52465.04, 15));
            
            accountList.Add(new Savings ("William Nelson", "Savings", "4845896", 4569.81, 10));

            accountList.Add(new CD ("Carley Chapman", "CD", "6543210", 32564.32, 0.24, 25));

            accountList.Add(new CD ("Cameron Rollin", "CD", "9784698", 56432.91, 0.24, 20));

            
            foreach (Account aAccount in accountList)         // foreach class test print list
            {
                Console.WriteLine(aAccount);
            }
                   
                    //TODO CRUD : create deposit method 
                    //TODO CRUD : create Checking withdrawal method that can be up to, but no exceed, 50% of acct bal
                    //TODO CRUD : create Savings withdrawal method that leaves account balance greater than withdrawal amount
                    //TODO CRUD : create CD withdrawal method for CD bal needing to be greater than the withdrawal amount and the penalty combined
                    /*  TODO
                        L - List all of the accounts in the list including the account id, balance, and account type and also as appropriate the interest rate, annual fee, and early penalty, and finally for interest-bearing accounts, the amount of annual interest given the current balance and interest rate
                        D - Perform a deposit transaction by getting an account number from the user and a deposit amount and if the account exists add the deposit amount to the balance
                        W - Perform a withdrawal transaction by getting an account number from the user and a withdrawal amount and if the account exists with enough of a balance, perform the withdrawal including any penalties
                        Q - Quit the transaction processing */ 
        }
    }
}
