﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TrainingManagementSystem.Models;

#nullable disable

namespace TrainingManagementSystem.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240607054959_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TrainingManagementSystem.Models.Course", b =>
                {
                    b.Property<string>("CourseName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Instructor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MaximumCapacity")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("CourseName");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Enrollment", b =>
                {
                    b.Property<bool>("Attended")
                        .HasColumnType("bit");

                    b.Property<string>("ParticipantName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ParticipantName1")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("SessionId")
                        .HasColumnType("int");

                    b.HasIndex("ParticipantName1");

                    b.HasIndex("SessionId");

                    b.ToTable("Enrollments");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Evaluation", b =>
                {
                    b.Property<int>("InstructorRating")
                        .HasColumnType("int");

                    b.Property<int>("SessionRating")
                        .HasColumnType("int");

                    b.ToTable("Evaluations");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Participant", b =>
                {
                    b.Property<string>("ParticipantName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("JobTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ParticipantName");

                    b.ToTable("Participants");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Session", b =>
                {
                    b.Property<int>("SessionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SessionId"));

                    b.Property<int>("CourseName")
                        .HasColumnType("int");

                    b.Property<string>("CourseName1")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Instructor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Time")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SessionId");

                    b.HasIndex("CourseName1");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Enrollment", b =>
                {
                    b.HasOne("TrainingManagementSystem.Models.Participant", "participant")
                        .WithMany()
                        .HasForeignKey("ParticipantName1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TrainingManagementSystem.Models.Session", "Session")
                        .WithMany()
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Session");

                    b.Navigation("participant");
                });

            modelBuilder.Entity("TrainingManagementSystem.Models.Session", b =>
                {
                    b.HasOne("TrainingManagementSystem.Models.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseName1");

                    b.Navigation("Course");
                });
#pragma warning restore 612, 618
        }
    }
}
