import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  slideIndex: number = 1;

  constructor() {}
  slides = [
    { homeImg1: 'assets/img/homeImg1.jpg' },
    { homeImg1: 'assets/img/homeImg2.jpg' },
    { homeImg1: 'assets/img/homeImg3.jpg' },
    { homeImg1: 'assets/img/homeImg4.jpg' },
    { homeImg1: 'assets/img/homeImg5.jpg' },
    { homeImg1: 'assets/img/homeImg4.jpg' },
    { homeImg1: 'assets/img/homeImg7.jpg' },

    // homeImg2 = 'assets/img/homeImg2.jpg';
    // homeImg3 = 'assets/img/homeImg3.jpg';
    // homeImg4 = 'assets/img/homeImg4.jpg';
    // homeImg5 = 'assets/img/homeImg5.jpg';
    // homeImg6 = 'assets/img/homeImg6.jpg';
    // homeImg7 = 'assets/img/homeImg7.jpg';
  ];

  // ngOnInit(): void {}

  sliders = [
    { img: 'assets/img/homeImg1.jpg' },
    { img: 'assets/img/homeImg2.jpg' },
    { img: 'assets/img/homeImg3.jpg' },
    { img: 'assets/img/homeImg4.jpg' },
    { img: 'assets/img/homeImg5.jpg' },
    { img: 'assets/img/homeImg1.jpg' },
    { img: 'assets/img/homeImg7.jpg' },
  ];

  ngOnInit(): void {
    this.showSlide(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlide((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.showSlide((this.slideIndex = n));
  }

  showSlide(n: number) {
    if (n > this.sliders.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
  }
}
