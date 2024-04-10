using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Repositories;
using Solid.Core.Services;


namespace Solid.Service
{
    public class AdminService : IAdminServices
    {
        private readonly IAdminRepositories _adminRepositor;
        public AdminService(IAdminRepositories adminRepositor)
        {
            _adminRepositor = adminRepositor;
        }

        public bool IsAdmin(string userName, string password)
        {
            return _adminRepositor.IsAdmin(userName, password);
        }
    }
}
