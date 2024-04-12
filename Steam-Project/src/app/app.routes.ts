import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditionListComponent } from './editions/edition-list/edition-list.component';
import { AddEditionComponent } from './editions/add-edition/add-edition.component';
import { EditEditionComponent } from './editions/edit-edition/edit-edition.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "editions", component: EditionListComponent },
    { path: "add-edition", component: AddEditionComponent },
    { path: "edit-edition/:id", component: EditEditionComponent/*, canActivate: [adminGuard]*/ },
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent}
];
