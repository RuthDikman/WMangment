using Solid.Core.Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.DTOs
{
    public class WorkerJobPositionDto
    {
        public int JobPositionId { get; set; }
        public string JobPositionName { get; set; }

        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
    }
}
