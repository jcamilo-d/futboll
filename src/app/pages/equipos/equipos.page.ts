import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {
  equipos:any;
  iconname:'football';

  constructor(private obtApiservice2:SwapiService) { }

  ngOnInit() {

    this.equipos= this.obtApiservice2.getSwapi('equipos');
    }

  }

