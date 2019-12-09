import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }

export class Assignment {
  constructor(public id:number, public name: string, public description: string, public location: string,public quantityUsers: number, public status: boolean){

  }
}
