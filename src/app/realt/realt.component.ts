import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {RealtService} from '../shared/realt.service';
import {Item} from '../models/realt';
import {Department} from '../models/sub';

@Component({
  selector: 'app-realt',
  templateUrl: './realt.component.html',
  styleUrls: ['./realt.component.css']
})

export class RealtComponent implements OnInit {
  // courses = [];
  // constructor(db: AngularFireDatabase, private http: HttpClient) {
  //   db.object('/').valueChanges()
  //     .subscribe(courses => {
  //       this.courses = courses.realtor;
  //       console.log(courses);
  //     });
  // }
  item: Item = {
    name: '',
    lastName: '',
    dateOfRegistration: '',
    depName: '',
    depId: ''
  };
  departments: Department[] = [
    {depId: '1', depName: 'Офис №1'},
    {depId: '2', depName: 'Офис №2'},
    {depId: '3', depName: 'Офис №3'},
    {depId: '4', depName: 'Офис №4'},
    {depId: '5', depName: 'Офис №5'}
  ];
  nrSelect = 'Департамент';
  public show = false;
  constructor(private realtService: RealtService) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.name != '' && this.item.lastName != '') {
      this.realtService.addItem(this.item);
      this.item.name = '';
      this.item.lastName = '';
      this.item.dateOfRegistration = '';
      this.item.subdivision = '';
      this.item.depName = '';
      this.item.depId = '';
    }
  }
  toggle() {
    this.show = !this.show;
  }
}
