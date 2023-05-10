console.log("Welcome to AddressBook System with JavaScript ")

let addressBook = [];
// constructor function to create contact objects
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

// add some sample contacts to the address book
addressBook.push(new Contact("Akhil", "Mondal", "Doddabalapur", "Karnataka", "Karnataka", "847563", "9348516846", "akhilmandalfamily@gmail.com"));
addressBook.push(new Contact("Abhi", "Mondal", "Malkangiri", "Malkangiri", "Odisha", "764086", "7749935811", "abhijeet@gmail.com"));

// display the contents of the address book
for (let i = 0; i < addressBook.length; i++) {
  console.log(`Name: ${addressBook[i].firstName} ${addressBook[i].lastName}`);
  console.log(`Address: ${addressBook[i].address}`);
  console.log(`City: ${addressBook[i].city}`);
  console.log(`State: ${addressBook[i].state}`);
  console.log(`ZIP: ${addressBook[i].zip}`);
  console.log(`Phone: ${addressBook[i].phone}`);
  console.log(`Email: ${addressBook[i].email}`);
  console.log("");
}