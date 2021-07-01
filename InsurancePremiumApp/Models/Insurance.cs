using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Models
{
    public class Insurance
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int EmployeePremiumPerYear { get; set; }
        public int DependentPremiumPerYear { get; set; }
    }
}
