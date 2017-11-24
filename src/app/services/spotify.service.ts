import { Injectable } from '@angular/core';

import {  Http, RequestOptions, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any [];
    headers:Headers;

    urlBusqueda:string = "https://api.spotify.com/v1/search";
    urlArtista:string = "https://api.spotify.com/v1/artists";

    constructor(private http:Http) {

    }


    private setHeaders() {

        console.log("set Headers started");

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        let tokenValue = 'Bearer BQA1n-PGktrmQ8twyJKErzfmVDycbvCpgZjitSgonsixVE4_UJ3RUrUIIVYdJblwmn2pv50dHUg66hsc2r8krAwUeAYLkaMD3sWyhog5PTEMylQhGydDUglXg5vO4zwk-Yt7TMEEWubdgf_IHl3kj07Hhb6BuKyp5xNPrsWV0OA-AMOCbQtnKE43w7lgvJ_y0x-wpZyjCB506zhVDxB2oQGq-U0uv6NHD1dUswsiKeZAmLWQNp7g7U6J3wKsEtdRYZT7qDubnF4wEykjccYfWUHzf_HQiOrD-VbRIEgeC2RDBcejw7ZLxiQ8ano';
        console.log("tokenValue:" + tokenValue);
        this.headers.append('Authorization', tokenValue);
    }


    getArtistas( termino:string ){
        this.setHeaders();
        let options = new RequestOptions({ headers: this.headers, body: '' });

        console.log("Ready Artistas!");

        let query = `?q=${termino}&type=artist`;
        let url = this.urlBusqueda + query;
        return this.http.get(url, options)
        .map(res =>{
            //console.log(res.json().artists.items);
            this.artistas = res.json().artists.items;
            console.log(this.artistas);
            return res.json().artists.items;
        });
    }

    getArtista(id:string ){
        this.setHeaders();
        let options = new RequestOptions({ headers: this.headers, body: '' });

        console.log("Ready Artistas!");

        let query = `/${id}`;
        let url = this.urlArtista + query;
        return this.http.get(url, options)
        .map( res => {
            //console.log(res.json().artists.items);
            console.log( res.json() );
            return res.json();
        });
    }

    getTop(id:string ){
        this.setHeaders();
        let options = new RequestOptions({ headers: this.headers, body: '' });

        console.log("Ready Artistas!");

        let query = `/${id}/top-tracks?country=US`;
        let url = this.urlArtista + query;
        return this.http.get(url, options)
        .map( res => {
            //console.log(res.json().artists.items);
            console.log( res.json().tracks );
            return res.json().tracks;
        });
    }





}
