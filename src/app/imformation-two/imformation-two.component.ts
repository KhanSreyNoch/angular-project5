import { Component } from '@angular/core';

@Component({
  selector: 'app-imformation-two',
  templateUrl: './imformation-two.component.html',
  styleUrls: ['./imformation-two.component.css'],
})
export class ImformationTwoComponent {
  // Real date logic
  currentDate: Date = new Date();

  // This array is what we loop through.
  // You can add as many objects here as you want boxes to appear.
  articles = [
    {
      id: 1,
      title:
        'ឯកឧត្តមបណ្ឌិត អ៊ាង សុផល្លែត៖ យុទ្ធនាការ «កម្ពុជាស្អាត ខ្មែរធ្វើបាន» ដាក់ចេញបន្ទាប់...',
    },
    {
      id: 2,
      title:
        'ឯកឧត្តមបណ្ឌិត អ៊ាង សុផល្លែត៖ យុទ្ធនាការ «កម្ពុជាស្អាត ខ្មែរធ្វើបាន» ដាក់ចេញបន្ទាប់...',
    },
    {
      id: 3,
      title:
        'ឯកឧត្តមបណ្ឌិត អ៊ាង សុផល្លែត៖ យុទ្ធនាការ «កម្ពុជាស្អាត ខ្មែរធ្វើបាន» ដាក់ចេញបន្ទាប់...',
    },
    {
      id: 4,
      title:
        'ឯកឧត្តមបណ្ឌិត អ៊ាង សុផល្លែត៖ យុទ្ធនាការ «កម្ពុជាស្អាត ខ្មែរធ្វើបាន» ដាក់ចេញបន្ទាប់...',
    },
  ];

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
