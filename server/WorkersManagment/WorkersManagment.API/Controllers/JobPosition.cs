using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Solid.Core.Enteties;
using Solid.Core.Services;
using Solid.Core.DTOs;
using bank.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobPosition : ControllerBase
    {
        private readonly IJobPositionServices _jobsServices;
        private readonly IMapper _mapper;
        public JobPosition(IJobPositionServices jobsServices, IMapper mapper)
        {
            _jobsServices = jobsServices;
            _mapper = mapper;
        }

        // GET: api/<jobs>
        [HttpGet]
        public ActionResult Get()
        {
            var jobs = _jobsServices.GetJobs();
            var jobsDto = new List<JobPositionDto>();
            for (int i = 0; i < jobs.LongCount(); i++)
            {
                jobsDto.Add(_mapper.Map<JobPositionDto>(jobs[i]));
            }
            return Ok(jobsDto);
        }

        // POST api/<jobs>
        [HttpPost]
        [Authorize]
        public ActionResult Post([FromBody] JobPositionPostModel value)
        {
            if (value == null)
            {
                return BadRequest("This role is already exist.");
            }
            else
            {
                var jobToAdd = new Solid.Core.Enteties.JobPosition
                {
                    Name = value.Name
                };
                _jobsServices.AddJob(jobToAdd);
                return Ok(true);
            }

        }

        // PUT api/<jobs>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] JobPositionPostModel value)
        {
            var jobToUpdate = new Solid.Core.Enteties.JobPosition { Name = value.Name };
            _jobsServices.UpdateJob(id, jobToUpdate);
        }

        // DELETE api/<jobs>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _jobsServices.DeleteJob(id);
        }
    }
}
