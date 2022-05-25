using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TipCalcMVC_d2
{
    class TipModel
    {
        //private fields
        private double amount;
        private double tipPercent;

        //default constructor
        public TipModel()
        {
            Amount = 0;
            TipPercent = 0;
        }

        //overloaded constructor
        public TipModel(double amt, double percent)
        {
            Amount = amt;
            TipPercent = percent;
        }

        //public properties
        public double Amount
        {
            get { return amount; }
            set { amount = value; }
        }

        public double TipPercent
        {
            get { return tipPercent; }
            set
            {
                if (value > 1)
                {
                    value /= 100;
                }
                tipPercent = value;
            }
        }

        public double CalculateTip()
        {
            //very simplistic tip calculation
            return Amount * TipPercent;
        }

        public double CalculateTotal()
        {
            //simple total calculation
            return CalculateTip() + Amount;
        }

    }
}