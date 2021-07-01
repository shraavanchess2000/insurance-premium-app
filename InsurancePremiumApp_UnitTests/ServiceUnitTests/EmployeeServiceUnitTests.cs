using System;
using System.Collections.Generic;
using System.Text;
using InsurancePremiumApp.Models;
using InsurancePremiumApp.Services;
using Newtonsoft.Json;
using NUnit.Framework;

namespace InsurancePremiumApp_UnitTests.ServiceUnitTests
{
    public class EmployeeServiceUnitTests
    {
        EmployeeService service;

        [SetUp]
        public void Setup()
        {
            service = new EmployeeService();
        }

        [Test]
        public void GetEmployeeByEmployeeId_GetsEmployeeRecordWhenIdMatchesAnExistingEmployeeRecord()
        {
            var id = new Guid("fc84ef57-562d-4073-a334-731b94662a3f");

            var expected = new Employee
            {
                Id = new Guid("fc84ef57-562d-4073-a334-731b94662a3f"),
                FirstName = "Joe",
                MiddleName = "Mo",
                LastName = "Schmo",
                GrossAmountPerPaycheck = 2000,
                DependentsOnInsurance = new List<Person>
                {
                    new Person
                    {
                        Id = new Guid("aa5c3a0d-7a0e-4ad8-b6b4-0859ac45d2ec"),
                        FirstName = "Joey",
                        MiddleName = "Child",
                        LastName = "Schmo"
                    },
                    new Person
                    {
                        Id = new Guid("bdf3dcc1-71f2-49e2-9875-27eabbffedf4"),
                        FirstName = "Anne",
                        MiddleName = "Spouse",
                        LastName = "Schmo"
                    }
                }
            };

            var actual = service.GetEmployeeByEmployeeId(id);

            Assert.AreEqual(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));
        }

        [Test]
        public void GetEmployeeByEmployeeId_GetsNullWhenIdDoesNotMatchAnExistingEmployeeRecord()
        {
            var id = Guid.Empty;

            Employee expected = null;

            var actual = service.GetEmployeeByEmployeeId(id);

            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void GetEmployeeInsurancesByEmployeeId_GetsInsuranceRecordsWhenIdMatchesAnExistingEmployeeRecord()
        {
            var id = new Guid("fc84ef57-562d-4073-a334-731b94662a3f");

            var expected = new List<Insurance>
            { 
                new Insurance
                {
                    Id = new Guid("c037ce05-2178-4f88-9d41-dc1fa69ddffe"),
                    Name = "Standard",
                    EmployeePremiumPerYear = 1000,
                    DependentPremiumPerYear = 500
                }
            };

            var actual = service.GetEmployeeInsurancesByEmployeeId(id);

            Assert.AreEqual(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));
        }

        [Test]
        public void GetEmployeeInsurancesByEmployeeId_GetsEmptyListWhenIdDoesNotMatchAnExistingEmployeeRecord()
        {
            var id = Guid.Empty;

            var expected = new List<Insurance>();

            var actual = service.GetEmployeeInsurancesByEmployeeId(id);

            Assert.AreEqual(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));
        }
    }
}
