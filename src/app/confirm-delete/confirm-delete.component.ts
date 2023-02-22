import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

    @Input() account: string|undefined // Variable for Parent Child Data Sharing using @input() decorator
    @Output()  oncancel = new EventEmitter() // creation of object for event emitter // Event Emitter Class creates oncancel object

    constructor(){

    }

    ngOnInit():void {

    }

    onCancel(){
      // Start Event
      this.oncancel.emit()
    }



}
