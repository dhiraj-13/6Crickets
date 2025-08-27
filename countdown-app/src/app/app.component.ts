import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule, provideHttpClient } from '@angular/common/http';
// import {CountdownComponent} from ''

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CountdownComponent]
  imports: [RouterOutlet, CountdownComponent],
//  providers: [
//     provideHttpClient(withFetch()),        // Provide HttpClient with fetch feature
//   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countdown-app';
}
// function provideHttpClient(): import("@angular/core").Provider {
//   throw new Error('Function not implemented.');
// }

