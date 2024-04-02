﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        public IEnumerable<Evento> _eventos = new Evento [] {
            new Evento () {
                EventoId = 1,
                Tema = "Angular 11",
                Local = "Belo Horizonte",
                Lote = "1º Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                ImagemURL = "Photo.url"
            },

            new Evento () {
                EventoId = 2,
                Tema = "Angular 11",
                Local = "Lavras",
                Lote = "1º Lote",
                QtdPessoas = 350,
                DataEvento = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy"),
                ImagemURL = "Photo2.url"
            }
        };

        public EventoController(ILogger<EventoController> logger)
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
          return _eventos;
         
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetByID(int id)
        {
          return _eventos.Where (evento => evento.EventoId == 1);
        }
    }
}

