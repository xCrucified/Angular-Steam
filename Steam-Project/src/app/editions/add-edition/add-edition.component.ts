import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CategoryModel, CreateEditionModel } from '../../services/editions';
import { EditionService } from '../../services/editions.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edition',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './add-edition.component.html',
  styleUrl: './add-edition.component.css'
})
export class AddEditionComponent implements OnInit{
  form: FormGroup;
  categories: CategoryModel[] = [];

  constructor(
    private fb: FormBuilder,
    private service: EditionService,
    private location: Location) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      description: ['', Validators.minLength(10)],
      categoryId: [0, [Validators.required, Validators.min(1)]],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // this.service.getCategories().subscribe(res => this.categories = res);
  }

  onSubmit(): void {
    if (!this.form.valid) {
      alert("Invalid data!")
      return;
    }
    const item = this.form.value as CreateEditionModel;
    this.service.create(item).subscribe(res => {
      console.log(res);
      this.back();
    });
  }

  back(): void {
    this.location.back();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({ image: file });
  }
}
