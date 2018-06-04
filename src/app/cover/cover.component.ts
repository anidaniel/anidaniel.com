import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

 title = 'Welcome to Anidaniel, Inc.';
 quote = 'Creating a better future with machine intelligence';
 subtitles = 'An intelligence solution incorporated to help everyone';
 subtitle = 'We are working on cognitive solutions to develop new ways to tackle  problems by using Machine Learing and Deep Learning';
  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '200',
      'height': '400',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 90,
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
        },
},




};

  }

}
