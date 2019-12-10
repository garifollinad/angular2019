import {Component, Input, OnInit} from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '400px',
        width: '400px',
        opacity: 1,
        backgroundColor: '#511268'
      })),
      state('closed', style({
        height: '200px',
        width: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent  implements OnInit {

  constructor() { }
  isOpen = true;

  ngOnInit() {
  }

  open() {
    this.isOpen = !this.isOpen;
  }

  @Input() logging = false;
  onAnimationEvent( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }

}
