import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CatalogoService {

  constructor(private http: HttpClient) { }

  getGrupos() {
    return this.http.get('https://compras.dados.gov.br/materiais/v1/grupos.json');            
  }

  getClassesPorGrupo(codigo: number) {
    return this.http.get('https://compras.dados.gov.br/materiais/v1/classes.json?codigo_grupo='+codigo);
  }

  getPDMporClasse(codigo: number) {
    return this.http.get('https://compras.dados.gov.br/materiais/v1/pdms.json?codigo_classe='+codigo);
  }

  // codigo: number;
  //   descricao: string;
  //   id_grupo: number;
  //   id_classe: number;
  //   id_pdm: number;
  //   status: boolean;
  //   sustentavel: boolean;
  getMaterialPorClasse(codigoClasse: number) {
    return this.http.get('https://compras.dados.gov.br/materiais/v1/materiais.json?classe='+codigoClasse);
  }
}
