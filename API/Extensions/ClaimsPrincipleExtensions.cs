using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user) {
            // retrieve the username from the token
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}