using Solid.Core.Enteties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.Entities
{
    public class WorkerJobPosition
    {
        [Key]
        public int JobPositionId { get; set; }
        public string JobPositionName { get; set; }

        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
        public int CustomerWorkerId { get; set; }
    }
}