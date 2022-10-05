using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API.Helpers
{
    // filter
    // it allows to perform some action before or after the action is executed(in this case we want to update the 'LastActive' 
    // property of the currently logged in user)
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next(); // execute an action

            // do smth after the action was executed
            if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return;

            var userId = resultContext.HttpContext.User.GetUserId();
            var uow = resultContext.HttpContext.RequestServices.GetService<IUnitOfWork>(); // get the service from the DI
            var user = await uow.UserRepository.GetUserByIdAsync(userId);
            user.LastActive = DateTime.UtcNow;
            await uow.Complete();
        }
    }
}