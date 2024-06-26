import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'serch-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serch-bar.component.html',
  styleUrl: './serch-bar.component.css'
})
export class SerchBarComponent {
  term = '';
  search = false;
  toggle(){
    this.search = !this.search;
  }
  log(e: any){
    e.preventDefault();
    console.log(e);
  }
}
