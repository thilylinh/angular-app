import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogRoutingModule } from "./blog-routing.module";
import { FormBlogComponent } from "./form-blog/form-blog.component";
import { ListBlogComponent } from "./list-blog/list-blog.component";

@NgModule({
    declarations: [
        ListBlogComponent,
        BlogDetailComponent,
        FormBlogComponent
    ],
    imports: [
        BlogRoutingModule,
        CommonModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class BlogModule { }