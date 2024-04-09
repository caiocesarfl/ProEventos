﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.Persistence;
using ProEventos.Domain;
namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class eventosController : ControllerBase
    {
        public readonly ProEventosContext _context;
        public eventosController(ProEventosContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
          return _context.Eventos;
         
        }

        [HttpGet("{id}")]
        public Evento GetByID(int id)
        {
          return _context.Eventos.FirstOrDefault (evento => evento.Id == id);
        }
    }
}

