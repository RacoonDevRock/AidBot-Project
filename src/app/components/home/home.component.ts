import { Component } from '@angular/core';
import ChatBotComponent from '../chat-bot/chat-bot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatBotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
