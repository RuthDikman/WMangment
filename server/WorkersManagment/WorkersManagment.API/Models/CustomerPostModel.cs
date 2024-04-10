using Solid.Core.Enteties;
using Solid.Core.Entities;
using System.ComponentModel.DataAnnotations;
using WorkersManagement.Models;

namespace bank.Models
{
    public class CustomerPostModel
    {
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

        public virtual List<WorkerJobPositionPostModel> Roles { get; set; }

    }
}
