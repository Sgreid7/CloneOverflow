using Microsoft.EntityFrameworkCore.Migrations;

namespace CloneOverflow.Migrations
{
    public partial class AddedTitleAndNavigationToQuestionPoco : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Questions");
        }
    }
}
