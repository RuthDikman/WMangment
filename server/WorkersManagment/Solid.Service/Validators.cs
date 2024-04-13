using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using Solid.Core.Enteties;
using Solid.Core.Repositories;

namespace Solid.Service
{
    public static class Validators
    {
        public static bool Validate(Customer customer)
        {
            if (customer.TZ.Length != 9 || !Regex.IsMatch(customer.TZ, @"^\d{9}$"))
            {
                return false;
            }
            DateTime eighteenYearsAgo = DateTime.Today.AddYears(-18);
            if (customer.DateOfBirth.Year >= eighteenYearsAgo.Year)
            {
                return false;
            }
            if (customer.Roles.Any(role => role.DateStartRole <= customer.DateOfStartingWork))
            {
                return false;
            }
            return true;
        }
    }
}
