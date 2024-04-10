using Solid.Core.Enteties;
using Solid.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Solid.Core.DTOs
{
    public class CustomerDto
    {
        public int WorkerId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string TZ { get; set; }

        [Required]
        public DateTime DateOfStartingWork { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public Gender Gender { get; set; }
        [Required]
        public bool Status { get; set; }
        public virtual List<WorkerJobPosition> Roles { get; set; }
    }
}
