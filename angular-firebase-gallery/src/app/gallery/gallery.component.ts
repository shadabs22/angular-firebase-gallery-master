import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    var temp = this.imageService.getImages();
    console.log('1. '+temp);
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    var temp = this.imageService.getImages();
    console.log('2. '+temp);
    this.images = this.imageService.getImages();
  }
}
