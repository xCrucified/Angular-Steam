import { Component } from "@angular/core";
import { RouterLink } from '@angular/router';
import { MatToolbar } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
