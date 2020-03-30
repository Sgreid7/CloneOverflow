namespace CloneOverflow.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int Score { get; set; }

        // Navigation Properties
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}