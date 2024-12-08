import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(300)])
    ])
  ]
})
export class AppComponent {
  title = 'angular-bootstrap-app';
  isVisible = true;
}

@NgModule({
  imports: [BrowserAnimationsModule]
})
export class AppModule {}