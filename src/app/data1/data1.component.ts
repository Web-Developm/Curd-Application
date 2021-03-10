import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {

  constructor() { }

  public id!: any;
  public name!: any;
  public salary!: any;
  public age!: any;
  public data: Array<{ id: number, name: string, salary: number, age: number }> = [];

  // public storage: Array<{ id: number, name: string, salary: number, age: number }> = [];


  title = "App";

  nameError = false;
  iderror = false;



  check = (): void => {

    let submitted: boolean = false;
    alert("id is avilable");
    console.log("Id is avilable");

  }



  add = (): void => {

    this.data.push({ id: this.id, name: this.name, salary: this.salary, age: this.age });
    alert("Successfully add");

    this.reset();
    //this.find(index,info1); 

    /*

    function pushToArray(arr,obj)
    {
      const index=arr.findIndex((e) => e.id === obj.id);

      if(index === -1)
      {
        arr.push(obj);
      }
      else{
        arr[index]=obj;
      }
    }



    */



  }


  reset() {
    this.id = "";
    this.name = "";
    this.salary = "";
    this.age = "";
  }

  dup = (id: number, info: any): any => {

    if (this.id == info.id) {
      alert("Id is not available");
    }
  }




  find = (element: any, index: any, array: any): any => {
    return (array[index] == this.id);
  }

  passed = this.data.filter(this.find);


  update = (info: any, index: any) => {
    let a = confirm("Are sure update the record");

    if (a == true) {
      //console.log(info);

      this.id = info.id;
      this.name = info.name;
      this.salary = info.salary;
      this.age = info.age;
    }

    else {
      alert("We stopped the update");
    }

  }

  update1 = (info: any, id: any, name: any, salary: any, age: any): any => {

    this.id = id;

    if (this.id === id) {
      console.log(id);

      info.pushToArray(name, salary, age);

      
    }

  }

  delete = (id: number) => {
    let r = confirm("Are you sure delete the item");
    if (r == true) {
      this.data.splice(id, 1);
      alert("Successfully deleted");
    }

    else {

      alert("We stopped the delete");

    }

  }




  sort = (j: number) => {
    this.data.sort();
  }



  ngOnInit(): void {
  }


}

