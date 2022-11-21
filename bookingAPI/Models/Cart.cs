using System.ComponentModel.DataAnnotations;

namespace bookingAPI.Models
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        public string SeatNo { get; set; }
        public string UserId { get; set; }
        public DateTime DateOfMovie { get; set; }
        public int Amount { get; set; }
        public int MovieId { get; set; }

    }
}
