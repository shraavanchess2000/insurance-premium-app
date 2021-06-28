using InsurancePremiumApp.Models;
using InsurancePremiumApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        [Route("{id}")]
        public Employee GetEmployeeByEmployeeId([FromRoute] Guid id)
        {
            return _employeeService.GetEmployeeByEmployeeId(id);
        }

        [HttpGet]
        [Route("{id}/Insurances")]
        public List<Insurance> GetEmployeeInsurancesByEmployeeId([FromRoute] Guid id)
        {
            return _employeeService.GetEmployeeInsurancesByEmployeeId(id);
        }
    }
}
