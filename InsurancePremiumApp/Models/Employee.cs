using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Models
{
    public class Employee : Person
    {
        public int GrossAmountPerPaycheck { get; set; }
        public List<Person> DependentsOnInsurance { get; set; }
    }
}
