import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [DataService, HttpClient],
  standalone: true,
})
export class HomePageComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res: any) => {
      console.log('api response', res);
    });
  }
}
