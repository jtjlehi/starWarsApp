import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.scss']
})
export class ForceComponent implements OnInit {

  @Input() force: number;
  @Output() forceStrengthClicked: EventEmitter<string> = new EventEmitter<string>();
  divWidth: number;

  constructor() {
  }

  ngOnInit() {
    this.divWidth = this.force * 26.7;
  }
  onForceClicked() {
    this.forceStrengthClicked.emit('this is a message saying the force element was clicked');
  }

}
