import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  tervehdys: string; // muuttuja tervedystä varten
  kaikkiMedia: any; // any eli mikä tahansa tyyppi
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {
    this.tervehdys = this.mediaService.testi;
    this.mediaService.getAllMedia().subscribe( data => { // subscribe palauttaa vakiona JSON tiedoston
      this.kaikkiMedia = data;
      // splitataan nimi erikseen ja pääte erikseen, eli piste toimii jakokohtana
      const temp = this.kaikkiMedia[0].filename.split('.');
      // näin toimii split, katsotaan consolessa tuloksia
      console.log(temp);
      const uusinimi = temp[0] + '-tn320.png'; // funktion sisäisiin muuttujiin const tai let, ei thissiä
        // katsotaan consolessa, että saadaan filename extension
      console.log(uusinimi);

        console.log(this.kaikkiMedia);
    });
  }

}
