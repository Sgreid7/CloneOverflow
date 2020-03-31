using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CloneOverflow.Migrations
{
    public partial class AddedDateCreatedAndDefaultValuesToPocos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreated",
                table: "Questions",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Score",
                table: "Questions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreated",
                table: "Answers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "Answers");
        }
    }
}
