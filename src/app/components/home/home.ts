import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';

@Component({
  selector: 'app-home',
  imports: [ Header,
             Content,
             Footer 
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
