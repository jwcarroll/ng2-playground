export class ContactsService {
    getContacts() {
        return new Promise(resolve => {
            resolve(contactList);
        });
    }

    getContact(id:number) {
        return new Promise(resolve => {
            var contact = _.find(contactList, {_id:id});

            resolve(contact);
        });
    }

    saveContact(contact) {
        return new Promise(resolve => {
            contactList.push(contact);

            resolve(contact);
        });
    }

    deleteContact(id:number) {
        return new Promise(resolve => {
            var removed = _.remove(contactList, {_id:id});

            resolve(removed[0]);
        });
    }
}

var contactList = [{
    _id:1,
    firstName: 'Josh',
    lastName: 'Carroll',
    email: 'jwarren.carroll@gmail.com',
    phoneNumber: '8655555555',
    dob: new Date('6/22/1981')
}, {
    _id:2,
    firstName: 'Patty',
    lastName: 'Carroll',
    phoneNumber: '8655555555',
    dob: new Date('1/23/1981')
}, {
    _id:3,
    firstName: 'Scott',
    lastName: 'Hanselman',
    email: 'scott@hanselman.com',
    dob: new Date('1/22/1974')
}, {
    _id:4,
    firstName: 'Paul',
    lastName: 'Irish',
    dob: new Date('7/23/1982')
},{
    _id:5,
    firstName:'Cory',
    lastName: 'House',
    email:'cory@bitnative.com'
},{
    _id:6,
    firstName:'Rachel',
    lastName:'Appel',
    email:'rachel@rachelappel.com'
},{
    _id:7,
    firstName:'Rachel',
    lastName:'Reese'
}];