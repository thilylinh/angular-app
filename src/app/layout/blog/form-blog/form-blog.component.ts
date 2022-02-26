import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, ImageBlog } from 'src/app/shared/models/blog/blog.model';
import { BlogService } from 'src/app/shared/service/blog/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.scss']
})
export class FormBlogComponent implements OnInit {
  blog: Blog = new Blog();
  imageUrl: string;
  file: any;
  title: string = 'Create blog';
  isEdit: boolean = false;
  blogId: number;
  isValidate: boolean;
  isSubmitted: boolean = false;

  constructor(private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogId = this.activatedRoute.snapshot.params.id;
    if (this.blogId) {
      this.getBlog(this.blogId);
      this.title = 'Edit blog';
      this.isEdit = true;
    }
  }

  async addOrUpdateBlog() {
    if (!this.blog.title || !this.blog.content || !this.imageUrl) {
      this.isValidate = true;
      return;
    }

    var blogFormData = new FormData();
    blogFormData.append('blog[title]', this.blog.title);
    blogFormData.append('blog[content]', this.blog.content);
    blogFormData.append('blog[image]', this.file);

    this.isSubmitted = true;
    if (this.isEdit) {
      this.blogService.updateBlog(this.blogId, blogFormData).then((res) => {
        alert('update success');
        this.isSubmitted = false;
        this.router.navigate(['/']);
      }).catch((err) => {
        alert('err');
      })
    } else {
      this.blogService.createBlog(blogFormData).then((res) => {
        alert('Add success');
        this.isSubmitted = false;
        this.router.navigate(['/']);
      }).catch((err) => {
        alert('err');
      })
    }
  }

  showPreview(event: Event) {
    if ((event.target as HTMLInputElement).files) {
      this.file = (event.target as HTMLInputElement).files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.file)
      reader.onload = (e) => {
        this.imageUrl = reader.result as string;
      }
    }
  }

  back() {
    this.router.navigate(['/']);
  }

  getBlog(id: number) {
    this.blogService.getBlogDetail(id).then((res) => {
      this.blog = res.data;
      this.imageUrl = this.blog.image?.url;
    }).catch((err) => {
      console.log(err);
    })
  }
}
