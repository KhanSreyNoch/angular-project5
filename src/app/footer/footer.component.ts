import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  // FIX: Change .ts to .html
  templateUrl: './footer.component.html',
  // FIX: Change .ts to .css (if you had a typo there too)
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly currentYear: number = new Date().getFullYear();
  logo = 'assets/img/logo.png';
  readonly socialLinks = [
    { platform: 'Facebook', iconUrl: 'assets/fb.png', url: '#' },
    { platform: 'YouTube', iconUrl: 'assets/yt.png', url: '#' },
    { platform: 'TikTok', iconUrl: 'assets/tt.png', url: '#' },
    { platform: 'X', iconUrl: 'assets/x.png', url: '#' },
    { platform: 'Instagram', iconUrl: 'assets/ig.png', url: '#' },
    { platform: 'LinkedIn', iconUrl: 'assets/li.png', url: '#' },
  ];
}
