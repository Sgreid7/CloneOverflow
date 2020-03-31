using System;

namespace CloneOverflow.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int Score { get; set; } = 0;
        public DateTime DateCreated { get; set; } = DateTime.Now;
    }
}