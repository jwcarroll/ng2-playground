import {Component, Template, Foreach, If} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/core/annotations/di';

@Component({
    selector: 'contact-card',
    bind: {
        'contact':'contact'
    }
})
@Template({
    url:'contact-card.html',
    directives:[If]
})
export class ContactCard{
    constructor(@EventEmitter('delete') deleteContact:Function){
        this.deleteContact = deleteContact;
    }

    onDeleteContact(){
        this.deleteContact();
    }
}