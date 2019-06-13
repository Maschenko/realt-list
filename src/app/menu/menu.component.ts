import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/realt';
import {RealtService} from '../shared/realt.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Item[];
  term: string;

  constructor(private realtService: RealtService) {
  }

  ngOnInit() {
    this.realtService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    });
  }

}
