using InsurancePremiumApp.Models;
using InsurancePremiumApp.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InsuranceController : ControllerBase
    {
        private readonly IInsuranceService _insuranceService;

        public InsuranceController(IInsuranceService insuranceService)
        {
            _insuranceService = insuranceService;
        }

        [HttpGet]
        [Route("{id}")]
        public Insurance Get([FromRoute] Guid id)
        {
            return _insuranceService.GetInsuranceByInsuranceId(id);
        }
    }
}
