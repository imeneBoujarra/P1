using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Test.Data.Models
{
    public class Checklist
    {
        [Key]
        public int? Id_checklist { get; set; }

        // Define URL paths for images
        [MaxLength(255)] 
        public string HeatPictureUrl { get; set; }

        [MaxLength(255)] 
        public string SwitchersPictureUrl { get; set; }

        [MaxLength(255)]
        public string Backbone { get; set; }

        [MaxLength(255)]
        public string Ventulation { get; set; }

        [MaxLength(255)]
        public string Security { get; set; }

        [MaxLength(255)]
        public string Storage { get; set; }
    }
}
