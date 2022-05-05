import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(title: string, body: string): void {
    if(!title || !body) {
      alert("Add post");
    } else {
      this.postService.savePost({title,body} as Post).subscribe(post => {
        console.log(post);
      });
    }
  }
}
