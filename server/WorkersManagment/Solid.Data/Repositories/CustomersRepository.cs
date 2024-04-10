using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Solid.Core.Enteties;
using Solid.Core.Entities;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class CustomersRepository : ICustomerRepositories
    {
        private readonly DataContext _context;

        public CustomersRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Customer> AddCustomerAsync(Customer cust)
        {
            _context.Customers.Add(cust);
            await _context.SaveChangesAsync();
            return cust;
        }
        public async Task DeleteCustomerAsync(string tz)
        {
            var temp = _context.Customers.Where(c => c.TZ == tz).FirstOrDefault();
            temp.Status = false;
            await _context.SaveChangesAsync();
        }

        public async Task<List<Customer>> GetCustomersAsync()
        {
            return _context.Customers.Include(u => u.Roles).ToList();
        }

        public async Task<Customer> GetCustomersByTzAsync(string tz)
        {
            return await _context.Customers.Include(u => u.Roles).FirstOrDefaultAsync(c => c.TZ == tz);
        }


        public async Task<Customer> UpdateCustomerAsync(int id, Customer cust)
        {
            try
            {
                var temp = _context.Customers.Find(id);
                _context.WorkersJobs.Where(x => x.CustomerWorkerId == id).ToList().ForEach(y => _context.WorkersJobs.Remove(y));
                if (temp != null)
                {
                    temp.TZ = cust.TZ;
                    temp.FirstName = cust.FirstName;
                    temp.LastName = cust.LastName;
                    temp.DateOfBirth = cust.DateOfBirth;
                    temp.DateOfStartingWork = cust.DateOfStartingWork;
                    temp.Gender = cust.Gender;
                    temp.Status = cust.Status;
                    temp.Roles = cust.Roles;
                }
                await _context.SaveChangesAsync();
                return temp;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
