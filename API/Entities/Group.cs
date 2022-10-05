using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    // entity to track connections to each group
    // (so if 2 users are both online, we want to mark sent messages as 'read')
    public class Group
    {
        public Group()
        {
        }

        public Group(string name)
        {
            Name = name;
        }

        [Key]
        public string Name { get; set; }
        public ICollection<Connection> Connections { get; set; } = new List<Connection>();
    }
}