using Solid.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.Services
{
    public interface IWorkerJobPositionServices
    {
        Task<List<WorkerJobPosition>> GetWorkerJobPositionAsync();
        Task<WorkerJobPosition> AddWorkerJobPositionAsync(WorkerJobPosition employeeJobPosition);

        WorkerJobPosition UpdateWorkerJobPosition(int id, WorkerJobPosition employeeJobPosition);

        Task DeleteWorkerJobPositionAsync(int id);
    }
}
