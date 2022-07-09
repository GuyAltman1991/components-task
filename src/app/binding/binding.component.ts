import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent {
  image: { url: string; alt?: string } = {
    url: 'https://cdn.pixabay.com/photo/2022/07/06/12/58/woman-7305088__340.jpg',
    alt: 'A woman in the nature',
  };

  isHidden: boolean = false;
  toggle() {
    this.isHidden = !this.isHidden;
  }
  log() {
    this.toggle();
  }
}
