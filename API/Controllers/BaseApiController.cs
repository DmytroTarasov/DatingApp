using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // apply a filter (which is implemented in a LogUserActivity class)
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        
    }
}