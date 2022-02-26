import { Injectable } from "@angular/core";
import axios from "axios";
import { Blog } from "../../models/blog/blog.model";

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    getAllBlogs(pageNumber: number, searchString: string, sortBy: string) {
        return axios.get('https://api-placeholder.herokuapp.com/api/v1/blogs', { params: { page: pageNumber, search: searchString, sort_by: sortBy } });
    }

    getBlogDetail(id: number) {
        return axios.get('https://api-placeholder.herokuapp.com/api/v1/blogs/' + id);
    }

    createBlog(blog: FormData) {
        return axios.post('https://api-placeholder.herokuapp.com/api/v1/blogs/', blog);
    }

    updateBlog(id: number, blog: FormData) {
        return axios.put('https://api-placeholder.herokuapp.com/api/v1/blogs/' + id, blog);
    }

    deleteBlog(id: number) {
        return axios.delete('https://api-placeholder.herokuapp.com/api/v1/blogs/' + id);
    }
}