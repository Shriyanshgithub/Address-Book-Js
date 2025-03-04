//decalre the class with appropriate fields
class AddressBook{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email

        this.validate();
    }

    //uc-2
  validate(){
    const validName = /^[A-Z][a-zA-Z]{2,}$/;
        const validAddress = /[A-Za-z0-9\s]{4,}/;
        const validZip = /^[a-z0-9\s]{6,}$/;
        const validatePhoneNumber1 = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/;
        const validatePhoneNumber2 = /^[0-9]{10}$/;
        const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        //validate email
        if(!validateEmail.test(this.email)){
            throw new Error("Invalid email");
        }

        //validate name
        if(!validName.test(this.firstName) || !validName.test(this.lastName)){
            throw new Error("Invalid First or last name");
        }

          // Validate address
          if (!validAddress.test(this.address)) {
            throw new Error("Invalid address format!");
        }

          // Validate phone number (both formats)
          if (!validatePhoneNumber1.test(this.phoneNumber) && !validatePhoneNumber2.test(this.phoneNumber)) {
            throw new Error("Invalid phone number format!");
        }

          // Validate zip
          if (!validZip.test(this.zip)) {
            throw new Error("Invalid ZIP code format!");
        }

  }
 
}

//uc-3
const addressBookArray = []
function addressBook(addressBook){
    addressBookArray.push(addressBook);
}

//uc-4
function updateAddressBook(firstName, updateAddressBook){
    for(let addressBook of addressBookArray){
        if(addressBook.firstName === firstName){
            Object.assign(addressBook, updateAddressBook);
            return;
        }
    }
}

//uc-5
function deleteAddressBook(firstName){
      addressBookArray = addressBookArray.filter(addressBook => addressBook.firstName === firstName);
}

//uc-6
function countAddressBook(){
    return addressBookArray.reduce((length,_) => length+1,0);
}

//uc-7
function removeDuplicates(){
    let uniqueAddressBooks = [...new Set(addressBookArray)];
    addressBookArray = uniqueAddressBooks;
}

//uc-8
function findAddressBookByCity(city){
    addressBookArray = addressBookArray.filter(addressBook => addressBook.city === city);
}

function findAddressBookByState(state){
    addressBookArray = addressBookArray.filter(addressBook => addressBook.state === state);
}
