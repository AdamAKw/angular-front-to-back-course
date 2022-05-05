import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output()
  newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(title: string, body: string): void {
    if(!title || !body) {
      alert("Add post");
    } else {
      this.postService.savePost({title,body} as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }
}
