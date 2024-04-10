using Solid.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.Repositories
{
    public interface IWorkerJobPositinRepositories
    {
        Task<List<WorkerJobPosition>> GetWorkerJobPositionAsync();
        Task<WorkerJobPosition> AddWorkerJobPositionAsync(WorkerJobPosition workerJobPosition);

        WorkerJobPosition UpdateWorkerJobPosition(int id, WorkerJobPosition workerJobPosition);

        Task DeleteWorkerJobPositionAsync(int id);
    }
}
