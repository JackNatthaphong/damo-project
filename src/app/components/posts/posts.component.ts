import { BaseService } from './../../services/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  list: any;
  listcol: string[] = [];
  constructor(protected base: BaseService) { }
  ngOnInit(): void {
    try {
      this.base.apiGet('https://jsonplaceholder.typicode.com/posts').then(res => {
        this.list = res;
        Object.keys(this.list[0]).forEach(key => {
          this.listcol.push(key);
        });
      });
    } catch (ex) { console.log(ex); }
  }
}
