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
    this.imageURL = "https://github.com/farouk2101/Porfolio/blob/farouk/resources/CV_Farouk.png?raw=true";
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
