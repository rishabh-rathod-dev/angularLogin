import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  images = ["https://social.fbbonline.in/images/home_banner.jpg", "https://www.falahsports.com/panelimages/mainbanner/banner_5.jpg"].map((n) => `${n}`);
}
