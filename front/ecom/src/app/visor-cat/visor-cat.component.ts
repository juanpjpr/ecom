import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor-cat',
  templateUrl: './visor-cat.component.html',
  styleUrls: ['./visor-cat.component.css']
})
export class VisorCatComponent implements OnInit {
  users: Array<number> = [1, 2, 3,4,5];
  constructor() {
   
    console.log("declarado")
   }

  ngOnInit(): void {
   
    console.log(this.users.length)
  }

}
