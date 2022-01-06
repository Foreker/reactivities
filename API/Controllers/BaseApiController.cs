using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices .GetService<IMediator>();

        // --Other way to do the above! --
        // protected IMediator Mediator { get; }
        // public BaseApiController(IMediator mediator)
        // {
        //     Mediator = mediator;
        // }
        // public BaseApiController() {
        // }
    }
}