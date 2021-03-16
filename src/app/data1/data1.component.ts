import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { threadId } from 'node:worker_threads';
import { element } from 'protractor';
//import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css'],
})
export class Data1Component implements OnInit {


  a = true;

  constructor() { }

  public id!: any;
  public name!: any;
  public salary!: any;
  public age!: any;
  public data: Array<{
    id: number;
    name: string;
    salary: number;
    age: number;
  }> = [];
  public search!: string;

  // public storage: Array<{ id: number, name: string, salary: number, age: number }> = [];

  public storage: any = this.data;

  title = 'App';

  nameError = false;
  iderror = false;

  today: number = Date.now();

  display = (): any => {
    let d: any = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let date = d.getDate();

    //console.log(hour*min*sec*date);
    this.id = hour * min * sec;
  };

  random = (): void => {
    this.id = Math.floor(Math.random() * 100);
  };

  click1 = false; //enable


  add = (): void => {

    let c = confirm("stored in table records?")

    this.data.push({
      id: this.id,
      name: this.name,
      salary: this.salary,
      age: this.age,
    });

    alert('Successfully add');

    this.reset();

    this.click1 = this.click1; //enable



  };

  user = (): void => {
    this.click1 = this.click1;
  }

  reset() {
    this.id = '';
    this.name = '';
    this.salary = '';
    this.age = '';
  }



  dup = (id: number, info: any): any => {
    if (this.id == info.id) {
      alert('Id is not available');
    }
  };

  isDisabled = false;

  dis(sam: string) {
    this.isDisabled = true;
  }

  click2 = true; // disable

  update = (info: any, index: any) => {
    let a = confirm('Are sure update the record');

    this.id = info.id;
    this.name = info.name;
    this.salary = info.salary;
    this.age = info.age;
    this.click2 = !this.click2; //enabled
    this.click1 = !this.click1; //disabled

  }

  update1 = (): any => {
    let a = confirm("Once updated can't modify");

    if (a == true) {
      let objIndex = this.data.findIndex((obj) => obj.id === this.id);
      this.data[objIndex].name = this.name;
      this.data[objIndex].salary = this.salary;
      this.data[objIndex].age = this.age;
      alert('Successfully update the table record');
      this.reset();
      this.click1 = !this.click1; //enabled
      this.click2 = !this.click2; //disabled
      //this.click1 = this.click1;
    } else {
      alert('Cancel');
    }


  };

  delete = (id: number) => {
    let r = confirm('Are you sure delete the item');
    if (r == true) {
      this.data.splice(id, 1);
      alert('Successfully deleted');
    } else {
      alert('We stopped the delete');
    }
  };

  sort = (j: number) => {
    this.data.sort();
  };

  ngOnInit(): void { }
}
