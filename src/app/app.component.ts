import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { CommonModule } from '@angular/common';
import { SerchBarComponent } from './serch-bar/serch-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , PageListComponent , CommonModule , SerchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wserch';
}
