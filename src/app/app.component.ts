import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selected = undefined;
  title = 'Movie Flops';
  data = [
    {
      id: 1,
      title: 'Disaster Movie',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTIzMDQyNDgwNl5BMl5BanBnXkFtZTcwMDA0MTc3MQ@@._V1_.jpg',
      rating: 2,
    },
    {
      id: 2,
      title: 'Jack and Jill',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNjczMTU5OTUyMl5BMl5BanBnXkFtZTcwODEzNjc3Ng@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      rating: 3,
    },
    {
      id: 3,
      title: 'Blood Money',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTU3Nzk5MDQxMl5BMl5BanBnXkFtZTcwNjI0NDkwOA@@._V1_SY1000_CR0,0,708,1000_AL_.jpg',
      rating: 3,
    },
  ];
  toggleSelect(movieId: number) {
    this.selected = this.selected === movieId ? undefined : movieId;
  }
  isSelected(movieId: number): boolean {
    return this.selected === movieId;
  }
}
