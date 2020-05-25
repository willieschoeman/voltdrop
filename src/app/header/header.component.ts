import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public collapsed: boolean

  constructor() {
    this.collapsed = true
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight - 100) {
      element.classList.add('navbar-solid');
    } else {
      element.classList.remove('navbar-solid');
    }
  }

}
