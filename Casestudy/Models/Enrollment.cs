using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TrainingManagementSystem.Models
{

    
    public class Enrollment
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("ParticipantName")]
        [Required(ErrorMessage = "ParticipantName is required")]
        public String ParticipantName { get; set; }
        public Participant participant { get; set; }

        

        [ForeignKey("SessionId")]
        [Required(ErrorMessage = "SessionId is required")]
        public int SessionId { get; set; }
        public Session Session { get; set; }

        public bool Attended { get; set; }
    }
}
