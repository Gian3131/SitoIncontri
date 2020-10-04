using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage=("La lunghezza della password deve essere fra i 4 e gli 8 caratteri."))]        
        public string Password { get; set; }
    }
}