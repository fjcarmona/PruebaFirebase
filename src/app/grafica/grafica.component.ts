import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { Chart, Options } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})

export class GraficaComponent implements OnInit {

  title="Datos Ventas";
  datos = [];
  fechasChart = [];
  ventasChart = [];

  constructor(private jsonDatos : DatosService) { 
    this.datos = jsonDatos.getDatos();

    for (let item of this.datos){
       this.fechasChart.push(item['FH_FACTURACION']);
       this.ventasChart.push(item['VTOTAL']);
     }

  }

  //Grafica 1
  public options: any = {
    chart: {
      type: 'line',
      height: 700
    },
    title: {
      text: 'Historico de ventas'
    },
    credits: {
      enabled: false
    },
    /*tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
          '  y: ' + this.y.toFixed(2);
      }
    },*/
    xAxis: {
      categories: this.fechasChart
    },
    series: [
      {
        name: 'Normal',
        data: this.ventasChart
      }
    ]
  } 

  ngOnInit(): void {
    Highcharts.chart('containerArea',this.options);
  }

}
