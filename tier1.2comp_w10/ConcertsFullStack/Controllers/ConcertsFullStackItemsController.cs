using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ConcertsFullStack.Models;

namespace ConcertsFullStack.Controllers
{
    [Route("api/ConcertsFullStack")]
    [ApiController]
    public class ConcertsFullStackItemsController : ControllerBase
    {
        private readonly ConcertsFullStackContext _context;

        public ConcertsFullStackItemsController(ConcertsFullStackContext context)
        {
            _context = context;
        }

        // GET: api/ConcertsFullStackItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConcertsFullStackItemDTO>>> GetConcertsFullStackItems()
        {
            return await _context.ConcertsFullStackItems
                .Select(x => ItemToDTO(x))
                .ToListAsync();
        }

        // GET: api/ConcertsFullStackItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConcertsFullStackItemDTO>> GetConcertsFullStackItem(long id)
        {
            var concertsFullStackItem = await _context.ConcertsFullStackItems.FindAsync(id);

            if (concertsFullStackItem == null)
            {
                return NotFound();
            }

            return ItemToDTO(concertsFullStackItem);
        }

        // PUT: api/ConcertsFullStackItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateConcertsFullStackItem(long id, ConcertsFullStackItemDTO concertsFullStackItemDTO)
        {
            if (id != concertsFullStackItemDTO.Id)
            {
                return BadRequest();
            }

            var concertsFullStackItem = await _context.ConcertsFullStackItems.FindAsync(id);
            if (concertsFullStackItem == null)
            {
                return NotFound();
            }

            concertsFullStackItem.Date = concertsFullStackItemDTO.Date;
            concertsFullStackItem.Price = concertsFullStackItemDTO.Price;
            concertsFullStackItem.Artist = concertsFullStackItemDTO.Artist;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConcertsFullStackItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ConcertsFullStackItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ConcertsFullStackItem>> PostConcertsFullStackItem(ConcertsFullStackItem concertsFullStackItem)
        {
            _context.ConcertsFullStackItems.Add(concertsFullStackItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetConcertsFullStackItem), new { id = concertsFullStackItem.Id }, ItemToDTO(concertsFullStackItem));
        }

        // DELETE: api/ConcertsFullStackItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConcertsFullStackItem(long id)
        {
            var concertsFullStackItem = await _context.ConcertsFullStackItems.FindAsync(id);
            if (concertsFullStackItem == null)
            {
                return NotFound();
            }

            _context.ConcertsFullStackItems.Remove(concertsFullStackItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConcertsFullStackItemExists(long id)
        {
            return _context.ConcertsFullStackItems.Any(e => e.Id == id);
        }
        private static ConcertsFullStackItemDTO ItemToDTO(ConcertsFullStackItem concersFullStackItem) =>
            new ConcertsFullStackItemDTO
            {
                Id = concersFullStackItem.Id,
                Date = concersFullStackItem.Date,
                Price = concersFullStackItem.Price,
                Artist = concersFullStackItem.Artist
            };
    }
}
