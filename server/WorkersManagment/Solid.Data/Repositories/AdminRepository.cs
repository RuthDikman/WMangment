using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Solid.Core.Enteties;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class AdminRepository : IAdminRepositories
    {
        private readonly DataContext _context;

        public AdminRepository(DataContext context)
        {
            _context = context;
        }

        public bool IsAdmin(string userName, string password)
        {
            return _context.Admin.Where(u => u.UserName == userName && u.Password == password).ToList().Count > 0;
        }
    }
}
