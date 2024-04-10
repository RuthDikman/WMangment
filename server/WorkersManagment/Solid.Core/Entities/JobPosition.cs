using System.ComponentModel.DataAnnotations;

namespace Solid.Core.Enteties
{
    public class JobPosition
    {
        [Key]
        public int RoleId { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
