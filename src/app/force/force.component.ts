import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-force',
  templateUrl: './force.component.html',
  styleUrls: ['./force.component.scss']
})
export class ForceComponent implements OnInit {

  @Input() force: number;
  divWidth: number;

  constructor() {
  }

  ngOnInit() {
    this.divWidth = this.force * 26.7;
  }

}
