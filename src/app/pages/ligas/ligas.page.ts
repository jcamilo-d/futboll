import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.page.html',
  styleUrls: ['./ligas.page.scss'],
})
export class LigasPage implements OnInit {

  ligas:any;
  iconname:'aperture'

  constructor(private obtApiservice:SwapiService) { }

  ngOnInit() {

     this.ligas= this.obtApiservice.getSwapi('ligas');
     
    /*this.obtApiservice.getSwapi('ligas').subscribe(data =>{
      this.ligas=data;
      console.log(data);
    })*/

  }

}
