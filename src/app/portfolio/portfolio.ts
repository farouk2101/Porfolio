import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  title!: string;
  counter!: number;
  createdAt!: Date;
  imageURL!: string;
  likeText!: string;

  ngOnInit(): void {
    this.title = "My Face";
    this.counter = 0;
    this.createdAt = new Date();
    this.imageURL = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.likeText = "Like";
  }

  onPictureClicked()
  {
    if (this.likeText == "Like")
    {
      this.likeText = "Unlike";
    }
    else
    {
      this.likeText = "Like";
    }
  }
}
