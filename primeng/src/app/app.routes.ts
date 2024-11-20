import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UserComponent } from './componentes/user/user.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path: "user",  component: UserComponent},
    {path: "dashboard", component: DashboardComponent}
];
