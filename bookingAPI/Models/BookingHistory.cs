using System.ComponentModel.DataAnnotations.Schema;

namespace bookingAPI.Models
{
    public class BookingHistory
    {
        public int Id { get; set; }
        public string SeatNo { get; set; }
        public string UserId { get; set; }
        public DateTime DateOfMovie { get; set; }
        public int Amount { get; set; }
        public int MovieDetailsId { get; set; }
      /*  [ForeignKey("MovieDetails")]
        public virtual MovieDetails moviedetails { get; set; }  */
    }
}
