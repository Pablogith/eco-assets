import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eacDynamic]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
