using AutoMapper;
using bank.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Solid.Core.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly IAdminServices _adminService;
    private readonly IMapper _mapper;
    public AuthController(IAdminServices adminService, IMapper mapper, IConfiguration configuration)
    {
        _adminService = adminService;
        _mapper = mapper;
        _configuration = configuration;
    }

    [HttpPost]
    public IActionResult Login([FromBody] AdminPostModel loginModel)
    {
        bool isAdmin = _adminService.IsAdmin(loginModel.Name, loginModel.Password);
        if (!isAdmin)
        {
            return BadRequest();
        }
        else
        {
            var claims = new List<Claim>()
            {
                new Claim("Name", loginModel.Name),
                new Claim("Password", loginModel.Password)
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: _configuration.GetValue<string>("JWT:Issuer"),
                audience: _configuration.GetValue<string>("JWT:Audience"),
                claims: claims,
                expires: DateTime.Now.AddMinutes(6),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });
        }
    }
}
