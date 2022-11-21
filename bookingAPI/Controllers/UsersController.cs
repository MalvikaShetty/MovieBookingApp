using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookingAPI.Models;

namespace bookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUserDetails()
        {
            return await _context.user.ToListAsync();
        }

        [HttpPost("createUser")]
        public async Task<ActionResult<User>> PostUserDetails(User userDetail)
        {   
            if(_context.user.Where(x => x.Email == userDetail.Email).FirstOrDefault() != null)
            {
                return Ok("Already exists");
            }

            userDetail.CreatedDate = DateTime.Now;
            _context.user.Add(userDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserDetails", new { id = userDetail.UserId }, userDetail);
        }

        [HttpPost("loginUser")]
        public async Task<ActionResult<User>> LoginUser(Login login)
        {
           
            var userAvail= _context.user.Where(u=>u.Email==login.Email && u.Password==login.Password).FirstOrDefault();
            if (userAvail != null)
            {
                return Ok("Success");
            }
            return Ok("Failure");


        }

    }
}
