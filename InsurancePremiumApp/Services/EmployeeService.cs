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
        Employee GetEmployeeByEmployeeId(Guid employeeId);
        List<Insurance> GetEmployeeInsurancesByEmployeeId(Guid employeeId);
    }

    public class EmployeeService : IEmployeeService
    {
        public Employee GetEmployeeByEmployeeId(Guid employeeId)
        {
            var employees = JsonConvert.DeserializeObject<List<Employee>>(Encoding.UTF8.GetString(Resources.Employees));

            return employees.Find(e => e.Id == employeeId);
        }

        public List<Insurance> GetEmployeeInsurancesByEmployeeId(Guid employeeId)
        {
            var employeesInsurances = JsonConvert.DeserializeObject<List<EmployeeInsurance>>(Encoding.UTF8.GetString(Resources.EmployeesInsurances));

            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(Encoding.UTF8.GetString(Resources.Insurances));

            var insuranceIds = employeesInsurances.FindAll(e => e.EmployeeId == employeeId).Select(e => e.InsuranceId).ToList();

            var insurancesToReturn = new List<Insurance>();

            foreach (var insuranceId in insuranceIds)
            {
                insurancesToReturn.Add(insurances.Find(e => e.Id == insuranceId));
            }

            return insurancesToReturn;
        }
    }
}
