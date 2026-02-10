import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imformation-three',
  templateUrl: './imformation-three.component.html',
  styleUrls: ['./imformation-three.component.css'],
})
export class ImformationThreeComponent implements OnInit {
  ngOnInit(): void {}
  documents = [
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
    { date: 'ថ្ងៃ ពុធ 15 វិច្ឆិកា 2023', size: '3.34 MB', downloadUrl: '#' },
  ];
}
