import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {
  jugadores:any;
  iconname:"body";

  constructor(private obtApiservice3:SwapiService) { }

  ngOnInit() {
    this.jugadores= this.obtApiservice3.getSwapi('ligas');
  }


}
