using Microsoft.EntityFrameworkCore;

namespace ConcertsFullStack.Models
{
    public class ConcertsFullStackContext : DbContext
    {
        public ConcertsFullStackContext(DbContextOptions<ConcertsFullStackContext> options)
            : base(options)
        {
        }

        public DbSet<ConcertsFullStackItem> ConcertsFullStackItems { get; set; }
    }

}