import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: IPost [] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe( data => {
      console.log(data);
      this.posts = data; //* Que es un Array de 100 Posts
    });
  }

}
