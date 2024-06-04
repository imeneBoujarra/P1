﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Test.Data;

#nullable disable

namespace test2.Migrations
{
    [DbContext(typeof(AppDb_Context))]
    partial class AppDb_ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Test.Data.Models.Checklist", b =>
                {
                    b.Property<int>("IdChecklist")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdChecklist"));

                    b.Property<string>("Backbone")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("HeatPictureUrl")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Security")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("ServerRoomId")
                        .HasColumnType("int");

                    b.Property<bool>("State")
                        .HasColumnType("bit");

                    b.Property<string>("Storage")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("SwitchersPictureUrl")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Ventilation")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("IdChecklist");

                    b.HasIndex("ServerRoomId");

                    b.ToTable("Checkliste");
                });

            modelBuilder.Entity("Test.Data.Models.Historical", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ChecklistId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("Id_user")
                        .HasColumnType("int");

                    b.Property<string>("PicturesFolderPath")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.HasKey("Id");

                    b.HasIndex("ChecklistId");

                    b.HasIndex("Id_user");

                    b.ToTable("Historical");
                });

            modelBuilder.Entity("Test.Data.Models.ServerRoom", b =>
                {
                    b.Property<int?>("Id_Room")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("Id_Room"));

                    b.Property<int>("Machines")
                        .HasColumnType("int");

                    b.Property<string>("QRCodeUrl")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("Room_Number")
                        .HasColumnType("int");

                    b.Property<int>("Servers_Numbers")
                        .HasColumnType("int");

                    b.Property<bool>("VerifyBackbone")
                        .HasColumnType("bit");

                    b.Property<bool>("VerifyHeat")
                        .HasColumnType("bit");

                    b.Property<bool>("VerifySecurity")
                        .HasColumnType("bit");

                    b.Property<bool>("VerifyStorage")
                        .HasColumnType("bit");

                    b.Property<bool>("VerifySwitchers")
                        .HasColumnType("bit");

                    b.Property<bool>("VerifyVentilation")
                        .HasColumnType("bit");

                    b.HasKey("Id_Room");

                    b.ToTable("ServersRoom");
                });

            modelBuilder.Entity("Test.Data.Models.Users", b =>
                {
                    b.Property<int?>("Id_user")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("Id_user"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Tel")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("first_name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id_user");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Test.Data.Models.Checklist", b =>
                {
                    b.HasOne("Test.Data.Models.ServerRoom", null)
                        .WithMany("Checklists")
                        .HasForeignKey("ServerRoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Test.Data.Models.Historical", b =>
                {
                    b.HasOne("Test.Data.Models.Checklist", "Checklist")
                        .WithMany("Historicals")
                        .HasForeignKey("ChecklistId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Test.Data.Models.Users", "User")
                        .WithMany("historcals")
                        .HasForeignKey("Id_user")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Checklist");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Test.Data.Models.Checklist", b =>
                {
                    b.Navigation("Historicals");
                });

            modelBuilder.Entity("Test.Data.Models.ServerRoom", b =>
                {
                    b.Navigation("Checklists");
                });

            modelBuilder.Entity("Test.Data.Models.Users", b =>
                {
                    b.Navigation("historcals");
                });
#pragma warning restore 612, 618
        }
    }
}
