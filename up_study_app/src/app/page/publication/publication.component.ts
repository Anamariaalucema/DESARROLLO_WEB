import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PubliComponent } from "../../shared/controls/publi/publi.component";

@Component({
  selector: 'app-publication',
  imports: [RouterLink, PubliComponent],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {

}
