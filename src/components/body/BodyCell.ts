import { Component, Input, ElementRef, ViewContainerRef } from '@angular/core';
import { TableColumn } from '../../models/TableColumn';
import { deepValueGetter } from '../../utils/deepGetter';

@Component({
  selector: 'datatable-body-cell',
  template: `
  	<div class="datatable-body-cell-label">
      <span [innerHTML]="rowValue"></span>
    </div>
  `,
  directives: [],
  host: {
    '[style.width]':'column.width + "px"',
    '[style.height]':'column.height + "px"'
  }
})
export class DataTableBodyCell {

  @Input() column: TableColumn;
  @Input() row: any;

  get rowValue() {
    if(!this.row) return '';
    return deepValueGetter(this.row, this.column.prop);
  }

  constructor(elm: ElementRef, public viewContainerRef:ViewContainerRef){
    elm.nativeElement.classList.add('datatable-body-cell');
  }

  ngOnInit() {
    console.log('col', this.column)

    this.viewContainerRef.insert(this.column.ref, 0)
    debugger;
  }

}
