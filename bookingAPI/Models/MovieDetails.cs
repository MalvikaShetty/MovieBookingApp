using System.ComponentModel.DataAnnotations;

namespace bookingAPI.Models
{
    public class MovieDetails
    {
        [Key]
        public int Id { get; set; }
        public string MovieTitle { get; set; }
        public string MovieDescription { get; set; }
        public DateTime MovieDate { get; set; }
        public string MoviePoster { get; set; }
        /*public virtual ICollection<BookingHistory> History { get; set; }*/
    }
}
