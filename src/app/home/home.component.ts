import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '400',
      'height': '400',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 150,
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'triangle',
        },

},

interactivity: {
  events: {
    onhover: {
      enable: true,
      mode: 'repulse',
    },

  }
}

};
  }

}
