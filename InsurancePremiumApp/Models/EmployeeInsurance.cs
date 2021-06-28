using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Models
{
    public class EmployeeInsurance
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid InsuranceId { get; set; }
    }
}
