import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButton,
            MatButtonModule,
            MatMenuModule, 
            FormsModule,
            MatButtonToggleModule,
            ReactiveFormsModule,
            RouterLink,
          ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {


}