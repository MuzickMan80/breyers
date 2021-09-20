import { Component, OnInit } from '@angular/core';
import { HorseListService, Breyer } from './horse-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.scss']
})
export class HorseListComponent implements OnInit {
  breyers$: Observable<Breyer[]>;

  constructor(private listService: HorseListService) { }

  ngOnInit(): void {
    this.breyers$ = this.listService.getHorses();
  }

}
