using System.ComponentModel.DataAnnotations;

namespace TrainingManagementSystem.Models
{
    public class Participant
    {
        [Key]
        [Required(ErrorMessage = "ParticipantName is required")]
        public string ParticipantName { get; set; }



        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Department is required")]
        public string Department { get; set; }

        [Required(ErrorMessage = "Job Title is required")]
        public string JobTitle { get; set; }
    }
}
