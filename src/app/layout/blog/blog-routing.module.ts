import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { FormBlogComponent } from "./form-blog/form-blog.component";
import { ListBlogComponent } from "./list-blog/list-blog.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ListBlogComponent,
            },
            {
                path: 'detail/:id',
                component: BlogDetailComponent
            },
            {
                path: 'create',
                component: FormBlogComponent
            },
            {
                path: 'update/:id',
                component: FormBlogComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }