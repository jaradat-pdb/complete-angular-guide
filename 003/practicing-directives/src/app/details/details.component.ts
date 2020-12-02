import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  static stylingIndex: number = 5;
  revealSecret: boolean = false;
  events: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  isRevealSecret(): boolean {
    return this.revealSecret = !this.revealSecret;
  }

  applyStyling(i: number): boolean {
    return (i >= DetailsComponent.stylingIndex);
  }

  logEvent(eventType: string): void {
    this.events.push(`${eventType} event occurred at ${new Date()}`);
  }
}
