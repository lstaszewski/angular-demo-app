import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categories: string[] = [];
  currentJoke: string = '';
  currentCategory: string = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.appService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getRandomJokeByCategory(category: string): void {
    this.appService.getRandomJokeByCategory(category).subscribe(({ value }) => {
      this.currentCategory = category;
      this.currentJoke = value;
    });
  }
}
