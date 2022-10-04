using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    // a join entity
    public class AppUserRole : IdentityUserRole<int>
    {
        public AppUser User { get; set; }
        public AppRole Role { get; set; }
    }
}