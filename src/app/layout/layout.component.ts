import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/service/blog/blog.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
  }
}
