using System.ComponentModel.DataAnnotations;

namespace TrainingManagementSystem.Models
{
    public class Course
    {
        [Key]
        [Required(ErrorMessage = "Course Name is required")]
        public string CourseName { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Instructor is required")]
        public string Instructor { get; set; }

        [Required(ErrorMessage = "Duration is required")]
        public int Duration { get; set; }

        [Required(ErrorMessage = "Start Date is required")]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage = "End Date is required")]
        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Location is required")]
        public string Location { get; set; }

        [Required(ErrorMessage = "Maximum Capacity is required")]
        public int MaximumCapacity { get; set; }
    }
}
