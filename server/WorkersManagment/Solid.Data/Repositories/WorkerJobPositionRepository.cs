using Solid.Core.Entities;
using Solid.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Data.Repositories
{
    public class WorkerJobPositionRepository : IWorkerJobPositinRepositories
    {
        private readonly DataContext _context;

        public WorkerJobPositionRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<WorkerJobPosition> AddWorkerJobPositionAsync(WorkerJobPosition workerJobPosition)
        {
            _context.WorkersJobs.Add(workerJobPosition);
            await _context.SaveChangesAsync();
            return workerJobPosition;
        }

        public async Task DeleteWorkerJobPositionAsync(int id)
        {
            var temp = _context.WorkersJobs.Find(id);
            _context.WorkersJobs.Remove(temp);
            await _context.SaveChangesAsync();

        }

        public async Task<List<WorkerJobPosition>> GetWorkerJobPositionAsync()
        {
            return _context.WorkersJobs.ToList();
        }

        public WorkerJobPosition UpdateWorkerJobPosition(int id, WorkerJobPosition workerJobPosition)
        {
            var temp = _context.WorkersJobs.ToList().Find(u => u.JobPositionId == id);
            if (temp != null)
            {
                temp.JobPositionId = workerJobPosition.JobPositionId;
                temp.JobPositionName = workerJobPosition.JobPositionName;
                temp.IsManagerial = workerJobPosition.IsManagerial;
                temp.DateStartRole = workerJobPosition.DateStartRole;
            }
            _context.SaveChanges();
            return temp;
        }
    }
}
