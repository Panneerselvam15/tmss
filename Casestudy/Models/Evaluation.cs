using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace TrainingManagementSystem.Models
{
   
    public class Evaluation
    {
        [Key]
        [Required(ErrorMessage = "SessionRating is required")]
        public int SessionRating { get; set; }

        public int InstructorRating { get; set; }


    }
}
