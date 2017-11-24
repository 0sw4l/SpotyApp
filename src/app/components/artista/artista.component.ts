import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service'


@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

    artista:any;
    pistas:any[];

    constructor(private activatedroute:ActivatedRoute,
        private _spotifyService: SpotifyService) {

        }

        ngOnInit() {
            this.activatedroute.params
            .map(parametros => parametros['id'])
            .subscribe( id => {
                console.log(' id artista : '+id);
                this._spotifyService.getArtista(id)
                .subscribe(
                    data => {
                        this.artista = data;
                    });

                this._spotifyService.getTop(id)
                .subscribe(
                    data => {
                        this.pistas = data;
                    });

                })
            }

            }
