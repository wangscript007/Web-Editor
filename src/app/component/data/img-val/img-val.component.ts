import { Component, OnInit } from '@angular/core';
import { DataBasicComponent } from '../data-basic/data-basic.component';

@Component({
  selector: 'app-img-val',
  templateUrl: './img-val.component.html',
  styleUrls: ['./img-val.component.scss']
})
export class ImgValComponent extends DataBasicComponent implements OnInit {
    imgs = [];
    data_type = 'img_url';
    constructor() {
      super()
    }
  
    ngOnInit() {
      this.imgs = [{
        name:"you",
        url: './../assets/imgs/you.jpg',
      },{
        name:"es6",
        url: './../assets/imgs/es.jpeg',
      }]
    }
  
    selectImg(img) {
      if(img && img['url']) {
        this.data['img_url'] = img['url'];
      }
    }
  
  }
  