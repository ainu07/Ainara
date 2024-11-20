import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng';
  items: MenuItem[]=[
    {label: "Home", icon: "pi pi-home", routerLink: "/home"},
    {label:"User", icon: "pi pi-user", routerLink: "/user"},
    {label: "Dashboard", icon: "pi pi-chart-line", routerLink: "/dashboard"}
  ]
}
