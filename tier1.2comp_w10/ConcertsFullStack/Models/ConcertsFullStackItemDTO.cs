using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConcertsFullStack.Models
{
    public class ConcertsFullStackItemDTO
    {
        public long Id { get; set; }
        public string Date { get; set; }
        public string Price { get; set; }
        public string Artist { get; set; }
    }
}