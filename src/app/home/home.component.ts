import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  options = {};

  ngOnInit() {
    var carousel = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(carousel, this.options);
  }

}
