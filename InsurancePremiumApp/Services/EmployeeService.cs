using InsurancePremiumApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Services
{
    public interface IEmployeeService
    {
        Employee GetById(Guid id);
    }

    public class EmployeeService : IEmployeeService
    {
        public Employee GetById(Guid id)
        {
            var employees = JsonConvert.DeserializeObject<List<Employee>>(Encoding.UTF8.GetString(Resources.Employees));

            return employees.Find(e => e.Id == id);
        }
    }
}
