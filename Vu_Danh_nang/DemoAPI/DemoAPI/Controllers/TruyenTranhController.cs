using DemoAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TruyenTranhController : ControllerBase
    {
        public static List<TruyenTranh> truyenTranhs = new List<TruyenTranh>();

        [HttpGet] 
        public IActionResult GetAll() 
        {
            return Ok(truyenTranhs);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            try
            {
                // LINQ [Object] Query
                var truyenTranh = truyenTranhs.SingleOrDefault(hh => hh.ID == int.Parse(id));
                if (truyenTranh == null)
                {
                    return NotFound();
                }
                return Ok(truyenTranh);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Create(TruyenTranh truyenTranh)
        {
            var truyentranh = new TruyenTranh
            {
                ID = truyenTranh.ID,
                TenTruyenTranh = truyenTranh.TenTruyenTranh,
                Sochuong = truyenTranh.Sochuong,
                Tacgia = truyenTranh.Tacgia,
                DonGia = truyenTranh.DonGia
            };
            truyenTranhs.Add(truyentranh);
            return Ok(new
            {
                Success = true, Data = truyentranh
            });
        }

        [HttpPut("{id}")]
        public IActionResult Edit(string id, TruyenTranh truyenTranhEdit)
        {
            try
            {
                // LINQ [Object] Query
               
                var truyenTranh = truyenTranhs.SingleOrDefault(hh => hh.ID == int.Parse(id));
                if (truyenTranh == null)
                {
                    return NotFound();
                }

                
                // Update
                truyenTranh.ID = truyenTranhEdit.ID;
                truyenTranh.TenTruyenTranh = truyenTranhEdit.TenTruyenTranh;
                truyenTranh.Sochuong = truyenTranhEdit.Sochuong;
                truyenTranh.Tacgia = truyenTranhEdit.Tacgia;
                truyenTranh.DonGia = truyenTranhEdit.DonGia;

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Remove(string id) 
        {
            try
            {
                // LINQ [Object] Query
                var truyenTranh = truyenTranhs.SingleOrDefault(hh => hh.ID == int.Parse(id));
                if (truyenTranh == null)
                {
                    return NotFound();
                }
                // Delete
                truyenTranhs.Remove(truyenTranh);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
