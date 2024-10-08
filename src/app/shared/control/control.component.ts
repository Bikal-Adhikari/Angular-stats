import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click')  onClick() {
  //   console.log('Clicked!');
  // }
  private el = inject(ElementRef);

  label = input.required<string>();
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  constructor() {
    afterRender(() => {
      console.log('After render');
    });
    afterNextRender(() => {
      console.log('After next render');
    });
  }
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit() {
    console.log('after content init');
  }
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
