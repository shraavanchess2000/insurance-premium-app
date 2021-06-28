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
        public void GetById_GetsRecordWhenIdMatchesAnExistingRecord()
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

            var actual = service.GetById(id);

            Assert.AreEqual(JsonConvert.SerializeObject(expected), JsonConvert.SerializeObject(actual));
        }

        [Test]
        public void GetById_GetsNullWhenIdDoesNotMatchAnExistingRecord()
        {
            var id = Guid.Empty;

            Employee expected = null;

            var actual = service.GetById(id);

            Assert.AreEqual(expected, actual);
        }
    }
}
