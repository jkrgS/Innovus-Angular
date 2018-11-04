import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source: LocalDataSource;
  data: any;

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      userId: {
        title: 'User ID',
        editable: false
      },
      title: {
        title: 'Title'
      },
      completed: {
        title: 'Completed'
      }
    }
  };

  constructor(private dataService: DataService) {
    this.source = new LocalDataSource();
   }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.data = data;

      this.source.load(this.data);
    });

  }

}
