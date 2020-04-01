using System;
using System.Collections.Generic;

namespace CloneOverflow.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Score { get; set; } = 0;
        public DateTime DateCreated { get; set; } = DateTime.Now;

        // Navigation properties
        public List<Answer> Answers { get; set; }
    }
}