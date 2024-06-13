using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TrainingManagementSystem.Models
{
    public class Session
    {
        [Key]
        [Required(ErrorMessage = "SessionId is required")]
        public int SessionId { get; set; }

        [ForeignKey("CourseName")]
        [Required(ErrorMessage = "CourseName is required")]
        public int CourseName { get; set; }

        public Course Course { get; set; }

  
        [Required(ErrorMessage = "Date is required")]
        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Time is required")]
        public string Time { get; set; }

        [Required(ErrorMessage = "Location is required")]
        public string Location { get; set; }

        
        [Required(ErrorMessage = "Instructor is required")]
        public string Instructor { get; set; }

        
    }
}
