using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookingAPI.Models;
using System.Linq;

namespace bookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly UserContext _context;

        public CartController(UserContext context)
        {
            _context = context;
        }

        [HttpPost("cartTotal/{userId}/{currentDate}/{movieId}")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCartTotal(Cart cart,string userId,DateTime currentDate,int movieId)
        {
           /* IList<Cart> xytz = null;*/
            /*var xyz = _context.cart.Where(m => m.UserId == user.UserId.ToString()).Sum(x => x.Amount);*/
            var xytz = _context.cart.Where(m => m.UserId == userId && m.DateOfMovie== currentDate && m.MovieId== movieId)
                .GroupBy(l =>  l.MovieId)
                .Select(t => new {
                    Amount = t.Sum(x => x.Amount),
                }).FirstOrDefault(); 
         /*   var custQuery =
                        from c in _context.cart
                        group c by c.DateOfMovie into dGroup
                        where dGroup.UserId == user.UserId
                        orderby dGroup.Key
                        select dGroup;*/
         
            /*Console.WriteLine(xyz);*/
            Console.WriteLine(xytz);
          /*  if (xytz.Count == 0) { return NotFound(); }*/
            return Ok(xytz);
        }

        [HttpPost("cartDeets")]
         public async Task<ActionResult<IEnumerable<Cart>>> GetCartDetails()
        {
            return await _context.cart.ToListAsync();
        }

        [HttpPost("addtocart")]
        public async Task<ActionResult<Cart>> PostCartDetails(Cart cartDet)
        {
            _context.cart.Add(cartDet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCartDetails", new { id = cartDet.Id }, cartDet);
        }

    }
}
