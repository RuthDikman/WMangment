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
    public class JobPositionService : IJobPositionServices
    {
        private readonly IJobsPositionRepositories _jobRepositor;
        public JobPositionService(IJobsPositionRepositories jobRepositor)
        {
            _jobRepositor = jobRepositor;
        }

        public JobPosition AddJob(JobPosition job)
        {
            return _jobRepositor.AddJob(job);
        }

        public void DeleteJob(int id)
        {
            _jobRepositor.DeleteJob(id);
        }

        public List<JobPosition> GetJobs()
        {
            return _jobRepositor.GetJobs();
        }

        public JobPosition UpdateJob(int id, JobPosition job)
        {
            return _jobRepositor.UpdateJob(id, job);
        }
    }
}
