import { material } from './../models/material';
import { pdm } from './../models/pdm';
import { CatalogoService } from './../catalogo.service';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, subscribeOn } from 'rxjs';
import { grupo } from '../models/grupo';
import { classe } from '../models/classe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private catalogoService: CatalogoService) {    
    
  }
  
  grupos: grupo[];
  classeFiltrada: classe[];  
  pdmFiltrados: pdm[];
  materiaisFiltrados: material[];


  codigoSelecionado: number = 0;
  classeSelecionada: any;
  pdmSelecionado: any;
  materialSelecionado: any;

  ngOnInit() {
    this.getGrupos();
  }
  
  getGrupos()  {
    
    return this.catalogoService.getGrupos()
      .subscribe((val:any) => {        
        this.grupos = val._embedded.grupos;
        return this.grupos;        
      })      
  }

  getClassesPorGrupo() {
    console.log('código grupo',this.codigoSelecionado);
    return this.catalogoService.getClassesPorGrupo(this.codigoSelecionado)
      .subscribe(
        (val:any) => {       
        this.classeFiltrada = val._embedded.classes;                
      });      
  }  

  getPDMporClasse() {
    console.log('código classe selecionado', this.classeSelecionada);
    return this.catalogoService.getPDMporClasse(this.classeSelecionada)
      .subscribe(
        (val: any) => {
          console.log(val);
          this.pdmFiltrados = val._embedded.pdms;
        }
      )
  }

  getMaterialPorClasse() {
    console.log('código classe selecionado', this.classeSelecionada);
    return this.catalogoService.getMaterialPorClasse(this.classeSelecionada)
      .subscribe(
        (val:any) => {
          console.log(val);
          this.materiaisFiltrados = val._embedded.materiais;
        }
      )

  }

}
