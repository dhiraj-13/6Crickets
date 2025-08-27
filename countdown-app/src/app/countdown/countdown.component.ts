import { Component, OnInit } from '@angular/core';
import { SharedCountdownService } from '../../../projects/shared-countdown/src/lib/shared-countdown.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit {
  secondsLeft = 0;

  constructor(private countdownService: SharedCountdownService) { }

  ngOnInit() {
    this.countdownService.secondsLeft$.subscribe((seconds) => {
      this.secondsLeft = seconds;
      console.log("here we go", this.secondsLeft);
    });
  }

}
