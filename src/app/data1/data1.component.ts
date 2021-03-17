import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'node:console';
import { threadId } from 'node:worker_threads';
import { element } from 'protractor';
import { EMPTY } from 'rxjs';
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
  public data: Array<{ id: number; name: string; salary: number; age: number; }> = [];
  public search!: string;
  title = 'App Development';

  //public storage: any = this.data;


  

  result1=():any=>{
    let result:any=[...new Set(this.data.map(res=>res.id))];
    console.log(result);
  }


  

  //simple: any = [1,2,3,4,54,1,2,3].filter(this.duplicates);



  rd=():any=>{
    let uuidv4 = require("uuid/v4")

  }



  today: number = Date.now();

  // Random Number
  display = (): any => {
    
    let d: any = new Date();
    let date=[
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    ];

    let y=d.getFullYear();
    let m=d.getMonth();
    let day=d.getDay();
    let da=d.getDate();
    let h=d.getHours();
    let mi=d.getMinutes();
    let s=d.getSeconds();
    let milli=d.getMilliseconds();

    

    switch(m)
    {
      case 0:
        m="January";
        break;
      case 1:
        m="February";
        break;
      
      case 2:
        m="March";
        break;
      
      case 3:
        m="April";
        break;
      
      case 4:
        m="May";
        break;
      
      case 5:
        m="June";
        break;
      
      case 6:
        m="July";
        break;
      
      default:
        break;
    }

    switch(day)
    {
      case 0:
        day="Monday";
        break;
      case 2:
        day="Tuesday";
        break;

      case 3:
        day="Wednesday";
        break;
      
      case 4:
        day="Friday";
        break;
      
      case 5:
        day="Saturday";
        break;
      case 6:
        day="Sunday";
        break;
        
    }


    
    let sample=[
      y,
      m,
      day,
      da,
      h,
      mi,
      s,
      milli
    ];

    this.id=sample.join("-");

  };

  random = (): void => {
    this.id = Math.floor(Math.random() * 100);
  };



  unique:any =this.data.filter((element,index,array) => array.findIndex(t => t.id === element.id) ==index)




  // Stored to the table
  //Add

  click1 = false; //enable

  add = (): void => {

    let c = confirm('stored in table records?');

    if(this.data.findIndex((element:any) => element.id === this.id) === -1)
    {
      this.data.push({
        id: this.id,
        name: this.name,
        salary: this.salary,
        age: this.age,
      });

      alert('Successfully add');
      this.reset();
      this.click1 = this.click1; //enable
      
    } else {
      alert("Already use");
    }

  }

  //Reset fields
  reset() {
    this.id = '';
    this.name = '';
    this.salary = '';
    this.age = '';
  }


  //Update table record
  click2 = true; // disable

  update = (info: any, index: any) => {
    let a = confirm('Are sure update the record');

    this.id = info.id;
    this.name = info.name;
    this.salary = info.salary;
    this.age = info.age;
    this.click2 = !this.click2; //enabled
    this.click1 = !this.click1; //disabled
  };

  update1 = (): any => {
    let a = confirm("Once updated can't modify");

    
      let objIndex = this.data.findIndex((obj) => obj.id === this.id);
      this.data[objIndex].name = this.name;
      this.data[objIndex].salary = this.salary;
      this.data[objIndex].age = this.age;
      this.reset();
      this.click1 = !this.click1; //enabled
      this.click2 = !this.click2; //disabled
      //this.click1 = this.click1;
  };

  //Delete the table records
  delete = (id: number) => {
    let r = confirm('Are you sure delete the item');
    if (r == true) {
      this.data.splice(id, 1);
      alert('Successfully deleted');
    } else {
      alert('We stopped the delete');
    }
  };

 



  ngOnInit(): void { }
}
