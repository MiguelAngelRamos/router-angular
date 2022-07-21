import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-photos',
  templateUrl: './container-photos.component.html',
  styleUrls: ['./container-photos.component.scss']
})
export class ContainerPhotosComponent implements OnInit {

  public imagen: string  = "https://i.linio.com/p/3eebd43470916f18151d45c8e962560e-product.webp";
  constructor() { }

  ngOnInit(): void {
  }

}
