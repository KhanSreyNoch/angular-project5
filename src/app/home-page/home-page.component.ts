import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  homeImg1 = 'assets/img/homeImg1.jpg';
  homeImg2 = 'assets/img/homeImg2.jpg';
  homeImg3 = 'assets/img/homeImg3.jpg';
  homeImg4 = 'assets/img/homeImg4.jpg';
  homeImg5 = 'assets/img/homeImg5.jpg';
  homeImg6 = 'assets/img/homeImg6.jpg';
  homeImg7 = 'assets/img/homeImg7.jpg';

  slideIndex = 0;
  slideInterval: any;

  // Only ONE ngOnInit is allowed
  ngOnInit() {
    this.showSlides();
    this.startAutoPlay();
    //ticker
  }

  // Manual navigation via dots
  currentSlide(n: number) {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startAutoPlay();
    }
    this.slideIndex = n - 1;
    this.showSlides();
  }

  // Timer logic for auto-advancing
  startAutoPlay() {
    this.slideInterval = setInterval(() => {
      this.slideIndex++;
      this.showSlides();
    }, 5000);
  }

  showSlides() {
    let slides = document.getElementsByClassName(
      'mySlides',
    ) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName('dot');

    if (slides.length === 0) return;

    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    if (slides[this.slideIndex] && dots[this.slideIndex]) {
      slides[this.slideIndex].style.display = 'block';
      dots[this.slideIndex].className += ' active';
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  // អត្ថបទដែលត្រូវរត់តាមក្រោយ
  textContent: string = 'ឯកឧត្តមបណ្ឌិត អ៊ាង សុផល្លែត យុទ្ធនាការ.';

  // បង្កើត Array ដើម្បីឱ្យវាវែងគ្រប់គ្រាន់សម្រាប់ Loop
  items: string[] = Array(4).fill(this.textContent);
}
