import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentResolver
} from '@angular/core';

@Component({
  selector: 'datatable-column',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class DataTableColumn {

  @Input() name: string;

  constructor(
    public viewContainerRef:ViewContainerRef, 
    private componentResolver: ComponentResolver) {

      console.log('ref', viewContainerRef)

    //this.componentResolver.resolveComponent(ControlBox).then((factory) => {
    //    this.componentRef = this.other.createComponent(factory);
        // this.componentRef = this.foo.createComponent(factory);
        // this.componentRef = this.div.createComponent(factory);
        // this.componentRef = this.viewContainerRef.createComponent(factory);
   // });
  }

}
