import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/shared/models/blog/blog.model';
import { BlogService } from 'src/app/shared/service/blog/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, AfterViewInit {
  blogId: number = 0;
  blog: Blog = new Blog();

  constructor(private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.blogId = this.activatedRoute.snapshot.params.id;
  }

  ngAfterViewInit(): void {
    this.getBlogDetail();
  }

  getBlogDetail() {
    this.blogService.getBlogDetail(this.blogId).then((res) => {
      if (res) {
        this.blog = res.data;
      }
    })
  }

  returnList() {
    this.router.navigate(['']);
  }
}
