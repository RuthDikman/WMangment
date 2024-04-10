using Solid.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace Solid.Core.Enteties
{
    public enum Gender
    {
        Male,
        Female
    }
    public class Customer
    {
        [Key]
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
