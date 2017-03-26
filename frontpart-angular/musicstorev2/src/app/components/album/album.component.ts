import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../services/album-service.service';
import {Album} from './model/album';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[];
  model = new Album('', '', '');

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
      // Load albums
      this.loadAlbums();
  }

    loadAlbums() {
        // Get all albums from API
         this.albumService.getAlbums()
                           .subscribe(
                               albums => this.albums = albums, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    submitAlbum(){
        // Variable to hold a reference of addAlbum
        let commentOperation:Observable<Album[]>;
        console.log(this.model);
        // Subscribe to observable
        this.albumService.addAlbum(this.model).subscribe(
                                () => {
                                   // empty object
                                    this.model = new Album('', '', '');
                                    // reload album list
                                    this.loadAlbums();
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

}
