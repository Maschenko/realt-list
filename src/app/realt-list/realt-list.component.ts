import {Component, Input, OnInit} from '@angular/core';
import { RealtService } from '../shared/realt.service';
import {Item} from '../models/realt';
import {PagerService} from '../shared/pager.service';
import {Department} from '../models/sub';

@Component({
  selector: 'app-realt-list',
  templateUrl: './realt-list.component.html',
  styleUrls: ['./realt-list.component.css']
})
export class RealtListComponent implements OnInit {
  constructor(private realtService: RealtService, private pagerService: PagerService) { }
  items: Item[];
  editState = false;
  itemToEdit: Item;
  public show = false;
  private allItems: any[];
  departments: Department[] = [
    {depId: '1', depName: 'Офис №1'},
    {depId: '2', depName: 'Офис №2'},
    {depId: '3', depName: 'Офис №3'},
    {depId: '4', depName: 'Офис №4'},
    {depId: '5', depName: 'Офис №5'}
  ];
  // pager object
  pager: any = {};
  term: string;
  // paged items
  ngOnInit() {
    this.realtService.getItems().subscribe(items => {
      this.items = items;
      // set items to json response
      this.allItems = items;

      // initialize to page 1
      this.setPage(1);
      console.log(items);
    });
  }

  clickMethod(event, item: Item) {
    if (confirm('Вы уверены, что хотите удалить риэлтора: ' + item.name + ' ' + item.lastName)) {
      this.clearState();
      this.realtService.deleteItem(item);
    }
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.realtService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  toggle() {
    this.show = !this.show;
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.items = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
