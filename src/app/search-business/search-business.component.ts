import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-search-business',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search-business.component.html',
  styleUrl: './search-business.component.scss'
})
export class SearchBusinessComponent {

}
