import { Component } from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AvatarModule, BadgeModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
