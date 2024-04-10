using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class JobPositionRepository : IJobsPositionRepositories
    {
        private readonly DataContext _context;

        public JobPositionRepository(DataContext context)
        {
            _context = context;
        }
        public JobPosition AddJob(JobPosition job)
        {
            var temp = _context.Jobs.ToList().Where(x => x.Name == job.Name).FirstOrDefault();
            if (temp != null)
            {
                return null;
            }
            else
            {
                _context.Jobs.Add(job);
                _context.SaveChanges();
                return job;
            }
        }

        public void DeleteJob(int id)
        {
            var temp = _context.Jobs.ToList().Find(x => x.RoleId == id);
            _context.Jobs.Remove(temp);
            _context.SaveChanges();
        }

        public List<JobPosition> GetJobs()
        {
            return _context.Jobs.ToList();
        }

        public JobPosition UpdateJob(int id, JobPosition JobPosition)
        {
            var temp = _context.Jobs.ToList().Find(u => u.RoleId == id);
            if (temp != null)
            {
                temp.Name = JobPosition.Name;
            }
            _context.SaveChanges();
            return temp;
        }
    }
}
