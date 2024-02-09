namespace Marathoning.Models
{
    public class ErrorViewModel
    {
        public string? RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }

    public class CalculatorModel
    {
        public decimal HourlyRate { get; set; }
    }
}
