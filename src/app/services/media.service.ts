import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  testi = 'moi vaan'; // stringissä pun alleviivaus, koska typescriptin (testi: string = 'sdfds' mukaan oikein mutta lintterin mukaan ei
  apiUrl = 'http://media.mw.metropolia.fi/wbma';


  constructor(private http: HttpClient) {   // angular common HttpClient injectoitu
  } // pitää olla constructorissa joko public tai private

  getAllMedia () {  // APIsta saadaan media kansion kautta kaikki media joka on tallennettu
    return this.http.get(this.apiUrl + '/media'); // palauttaa muuttujaan apiUrl tallennetun osoitteen mediat
  }


}
