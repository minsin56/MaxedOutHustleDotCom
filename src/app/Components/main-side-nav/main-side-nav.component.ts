import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.css']
})
export class MainSideNavComponent implements OnInit {
  @Input() Opened = true;
  constructor() { }

  ngOnInit(): void {
  }

}
