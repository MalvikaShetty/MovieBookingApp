using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bookingAPI.Migrations
{
    public partial class fourth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_bookinghistory_moviedetails_MovieDetails",
                table: "bookinghistory");

            migrationBuilder.DropIndex(
                name: "IX_bookinghistory_MovieDetails",
                table: "bookinghistory");

            migrationBuilder.DropColumn(
                name: "MovieDetails",
                table: "bookinghistory");

            migrationBuilder.AlterColumn<string>(
                name: "MovieDescription",
                table: "moviedetails",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "MovieDescription",
                table: "moviedetails",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "MovieDetails",
                table: "bookinghistory",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_bookinghistory_MovieDetails",
                table: "bookinghistory",
                column: "MovieDetails");

            migrationBuilder.AddForeignKey(
                name: "FK_bookinghistory_moviedetails_MovieDetails",
                table: "bookinghistory",
                column: "MovieDetails",
                principalTable: "moviedetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
