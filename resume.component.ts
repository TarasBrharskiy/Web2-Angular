import { Component } from '@angular/core';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {RightPanelComponent} from './right-panel/right-panel.component';

@Component({
  selector: 'app-resume',
  imports: [
    LeftPanelComponent,
    RightPanelComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: true
})
export class ResumeComponent {

}
