import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  AllPhotos:iPhotos[]=[]

  constructor(private getPhotos:PhotosService){}

  ngOninit(){

  this.getPhotos.getAllPhotos().subscribe(AllPhotos=>{
    this.AllPhotos=AllPhotos
  })

  }
}
