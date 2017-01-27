import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Album} from '../components/album/model/album';


@Injectable()
export class AlbumService {

  constructor(private http: Http) { }

  private albumsUrl = 'http://localhost:9000/'; 

  // Fetch all existing albums
     getAlbums() : Observable<Album[]> {

         // ...using get request
         return this.http.get(this.albumsUrl)
          // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     // Add a new album
    addAlbum (body: Object): Observable<Album[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'text/plain' }); // ... Set content type as text in order not to trigger preflight OPTIONS request
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.albumsUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error || 'Server error')); //...errors if any
    }  
}
