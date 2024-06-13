using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TrainingManagementSystem.Models
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext() { }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Participant> Participants { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Evaluation> Evaluations { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }
    }
}
