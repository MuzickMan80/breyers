import { Component } from '@angular/core';
import { HorseListService } from './horse-list/horse-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breyers';
  searchText = '';
  
  constructor(private listService: HorseListService) { }

  onSearchKeypress(event: any) {
    console.log(event.target.value);
    this.listService.setFilter(event.target.value);
  }
}
