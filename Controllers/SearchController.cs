using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloneOverflow.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CloneOverflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        private readonly DatabaseContext _context;

        public SearchController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/search/question
        [HttpGet("question")]
        public async Task<ActionResult> SearchQuestions(string searchTerm)
        {
            var results = _context.Questions.Where(q => q.Content.ToLower().Contains(searchTerm.ToLower()) || q.Title.ToLower().Contains(searchTerm.ToLower()));
            return Ok(await results.ToListAsync());
        }

        // GET: api/search/answer
        [HttpGet("answer")]
        public async Task<ActionResult> SearchAnswers(int searchTerm)
        {
            var results = _context.Answers.Where(a => a.QuestionId == searchTerm);
            return Ok(await results.ToListAsync());
        }


    }
}