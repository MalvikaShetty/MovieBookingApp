using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookingAPI.Models;

namespace bookingAPI.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }

        public DbSet<User> user { get; set; }
        public DbSet<Cart> cart { get; set; }
        public DbSet<MovieDetails> moviedetails { get; set; }
        public DbSet<BookingHistory> bookinghistory { get; set; }
    }
}
