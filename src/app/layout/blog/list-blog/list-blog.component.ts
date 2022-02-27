import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/shared/models/blog/blog.model';
import { BlogService } from 'src/app/shared/service/blog/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {

  blogs: Blog[] = [];
  page: number = 1;
  totalRecords: number;
  sortedByString: string = 'created_at';
  searchString: string;
  sortByEnum = [{
    name: 'Created At',
    value: 'created_at'
  }, {
    name: 'Title',
    value: 'title'
  }, {
    name: 'Content',
    value: 'content'
  }]

  constructor(private blogService: BlogService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(pageNumber = 1, search = '', sortBy = '') {
    this.blogService.getAllBlogs(pageNumber, search, sortBy).then(res => {
      if (res) {
        this.blogs = res.data.data;
        this.totalRecords = res.data.pagy.count;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  gotoDetail(id?: number) {
    this.router.navigate(['/detail/', id])
  }

  addNewBlog() {
    this.router.navigate(['create']);
  }

  updateBlock(id: number) {
    this.router.navigate(['/update/', id])
  }
  deleteBlock(id: number) {
    this.blogService.deleteBlog(id).then((res) => {
      var index = this.blogs.findIndex(x => x.id === id);
      if (index > -1) {
        this.blogs.splice(index, 1);
        alert("Delete success");
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  pageChanged(e: number) {
    this.page = e;
    this.getAllBlogs(e);
  }

  sortBy(e: string) {
    this.sortedByString = e;
    this.getAllBlogs(this.page, '', e)
  }
  searchChange() {
    this.page = 1;
    if (!this.searchString) {
      this.getAllBlogs(this.page)
    }
  }

  search() {
    if (this.searchString) {
      this.getAllBlogs(null, this.searchString, this.sortedByString)
    }
  }
}
