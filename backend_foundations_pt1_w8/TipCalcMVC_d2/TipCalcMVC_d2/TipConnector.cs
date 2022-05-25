using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TipCalcMVC_d2
{
    internal class TipConnector
    {
        private TipModel tip;
        private TipView display;

        public TipConnector()
        {
            display = new TipView();
            tip = new TipModel(display.Amt, display.Percentage);
            display.TipAmount = tip.CalculateTip();
            display.Total = tip.CalculateTotal();
            display.ShowTipandTotal();
        }
    }
}
