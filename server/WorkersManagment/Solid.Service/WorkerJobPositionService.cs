using Solid.Core.Entities;
using Solid.Core.Repositories;
using Solid.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Service
{
    public class WorkerJobPositionService : IWorkerJobPositionServices
    {
        private readonly IWorkerJobPositinRepositories _iWorkerJobPositionRepos;
        public WorkerJobPositionService(IWorkerJobPositinRepositories eJobPosRepositor)
        {
            _iWorkerJobPositionRepos = eJobPosRepositor;
        }

        public async Task<WorkerJobPosition> AddWorkerJobPositionAsync(WorkerJobPosition employeeJobPosition)
        {
            return await _iWorkerJobPositionRepos.AddWorkerJobPositionAsync(employeeJobPosition);
        }

        public async Task DeleteWorkerJobPositionAsync(int id)
        {
            await _iWorkerJobPositionRepos.DeleteWorkerJobPositionAsync(id);
        }

        public async Task<List<WorkerJobPosition>> GetWorkerJobPositionAsync()
        {
            return await _iWorkerJobPositionRepos.GetWorkerJobPositionAsync();
        }

        public WorkerJobPosition UpdateWorkerJobPosition(int id, WorkerJobPosition employeeJobPosition)
        {
            return _iWorkerJobPositionRepos.UpdateWorkerJobPosition(id, employeeJobPosition);
        }
    }
}
