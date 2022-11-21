using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookingAPI.Models;

namespace bookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieDetailsController : ControllerBase
    {
        private readonly UserContext _context;

        public MovieDetailsController(UserContext context)
        {
            _context = context;
        }

        [HttpGet("movieDeets")]
        public async Task<ActionResult<IEnumerable<MovieDetails>>> GetMovieDetails()
        {
            return await _context.moviedetails.ToListAsync();
        }

        [HttpPost("addMovie")]
        public async Task<ActionResult<MovieDetails>> PostMovieDetails(MovieDetails movieDet)
        {
            _context.moviedetails.Add(movieDet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieDetails", new { id = movieDet.Id }, movieDet);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MovieDetails>> GetMovieDetailsById(int id)
        {
            var movieDetailbyid = await _context.moviedetails.FindAsync(id);

            if (movieDetailbyid == null)
            {
                return NotFound();
            }

            return movieDetailbyid;
        }


    }
}
