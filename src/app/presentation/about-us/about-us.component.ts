import {Component, ComponentFactoryResolver, ViewContainerRef, OnInit, ViewChild} from '@angular/core';
import {AnimationComponent} from '../../shared/animation/animation.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  show = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('viewContainerRef', {read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  ngOnInit() {
  }

  animation() {
    this.show = true;
    const factory = this.componentFactoryResolver.resolveComponentFactory(AnimationComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
