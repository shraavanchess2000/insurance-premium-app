using System;
using System.Collections.Generic;
using System.Text;
using InsurancePremiumApp.Models;
using InsurancePremiumApp.Services;
using Newtonsoft.Json;
using NUnit.Framework;

namespace InsurancePremiumApp_UnitTests.ServiceUnitTests
{
    public class InsuranceServiceUnitTests
    {
        InsuranceService service;

        [SetUp]
        public void Setup()
        {
            service = new InsuranceService();
        }

        [Test]
        public void GetInsuranceByInsuranceId_GetsInsuranceRecordWhenIdMatchesAnExistingInsuranceRecord()
        {
            var id = new Guid("c037ce05-2178-4f88-9d41-dc1fa69ddffe");

            var expected = new Insurance
            {
                Id = new Guid("c037ce05-2178-4f88-9d41-dc1fa69ddffe"),
                Name = "Standard",
                EmployeePremiumPerYear = 1000,
                DependentPremiumPerYear = 500
            };

            var actual = service.GetInsuranceByInsuranceId(id);

            Assert.AreEqual(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));
        }

        [Test]
        public void GetInsuranceByInsuranceId_GetsNullWhenIdDoesNotMatchAnExistingInsuranceRecord()
        {
            var id = Guid.Empty;

            Employee expected = null;

            var actual = service.GetInsuranceByInsuranceId(id);

            Assert.AreEqual(expected, actual);
        }
    }
}
