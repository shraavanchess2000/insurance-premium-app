using InsurancePremiumApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePremiumApp.Services
{
    public interface IInsuranceService
    {
        Insurance GetById(Guid id);
    }

    public class InsuranceService : IInsuranceService
    {
        public Insurance GetById(Guid id)
        {
            var insurances = JsonConvert.DeserializeObject<List<Insurance>>(Encoding.UTF8.GetString(Resources.Insurances));

            return insurances.Find(e => e.Id == id);
        }
    }
}
