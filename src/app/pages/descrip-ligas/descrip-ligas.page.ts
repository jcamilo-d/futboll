import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-descrip-ligas',
  templateUrl: './descrip-ligas.page.html',
  styleUrls: ['./descrip-ligas.page.scss'],
})
export class DescripLigasPage implements OnInit {
  ligas:any;

  constructor(private obterRoute:ActivatedRoute, private obtservswapi4:SwapiService) { }

  ngOnInit() {
    this.obterRoute.paramMap.subscribe((params)=>{
      let id=params.get('id');
      console.log(id);
      this.ligas = this.obtservswapi4.getSwapi(`ligas/${id}`).subscribe(data =>{
        this.ligas=data;
        console.log(data);
      });
    });
  }

}