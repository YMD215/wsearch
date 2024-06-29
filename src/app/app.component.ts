import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , PageListComponent ,CommonModule , SerchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private wiki: WikipediaService){}
  pages = [];
  TermSub(value: any){
    this.wiki.search(value).subscribe((response : any) => {
      this.pages = response.query.search
      console.log(response.query)
    });
  }  
}
