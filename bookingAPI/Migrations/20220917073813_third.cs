using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace bookingAPI.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "cart",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SeatNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateOfMovie = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cart", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "moviedetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MovieTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieDescription = table.Column<int>(type: "int", nullable: false),
                    MovieDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MoviePoster = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_moviedetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "bookinghistory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SeatNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateOfMovie = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    MovieDetailsId = table.Column<int>(type: "int", nullable: false),
                    MovieDetails = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookinghistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_bookinghistory_moviedetails_MovieDetails",
                        column: x => x.MovieDetails,
                        principalTable: "moviedetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_bookinghistory_MovieDetails",
                table: "bookinghistory",
                column: "MovieDetails");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bookinghistory");

            migrationBuilder.DropTable(
                name: "cart");

            migrationBuilder.DropTable(
                name: "moviedetails");
        }
    }
}
