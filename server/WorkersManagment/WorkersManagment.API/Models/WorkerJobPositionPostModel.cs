using bank.Models;

namespace WorkersManagement.Models
{
    public class WorkerJobPositionPostModel
    {
        public int JobId { get; set; }
        public string JobPositionName { get; set; }

        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
    }
}
