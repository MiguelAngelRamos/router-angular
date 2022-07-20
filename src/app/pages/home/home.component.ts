import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';
import { DataService } from 'src/app/services/data.service';
import { IComment } from 'src/app/interfaces/IComment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: IPost [] = [];
  public comments: IComment [] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPotsApi();
    this.getCommentsApi();
  }

  getPotsApi() {
    this.dataService.getPosts().subscribe( data => {
      console.log(data);
      this.posts = data; //* Que es un Array de 100 Posts
    });
  }

  getCommentsApi() {
    this.dataService.getComments().subscribe(commentData => {
      console.log(commentData);
      this.comments = commentData;
    });
  }

}
