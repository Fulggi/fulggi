import { Component } from '@angular/core';
import { Body } from '../body/body';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [ Header,
             Body,
             Footer 
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
