/**
 * Created by Josh on 3/5/2015.
 */
import {Component, Template, bootstrap, Foreach, If} from 'angular2/angular2';
import {ContactCard} from 'contact';
import {ContactsService} from 'contacts-service';

// Annotation section
@Component({
    selector: 'my-app',
    services:[ContactsService]
})
@Template({
    url: 'app.html',
    directives: [Foreach, ContactCard, If]
})
class MyAppComponent {
    constructor(contactsService: ContactsService) {
        this.contactsService = contactsService;
        this.init();
    }

    init(){
        this.contactsService.getContacts()
            .then(contacts => {
                this.contacts = contacts;
                this.applyFilter();
            });
    }

    applyFilter(){
        var matcher = new RegExp(this.searchText, 'i');

        this.filteredContacts = _.filter(this.contacts, c => {
            return _.some(c, val => matcher.test(val));
        });
    }

    updateSearchText(newSearch){
        this.searchText = newSearch;
        this.applyFilter();
    }

    deleteContact(contact){
        this.contactsService.deleteContact(contact._id)
        .then(result => {
                _.remove(this.contacts, contact);
                this.applyFilter();
            });
    }
}

bootstrap(MyAppComponent);