beforeEach(function(){
 Contact.all = [];
});

describe("Contact", function() {
  describe("initialize", function() {
    it("sets the first and last name", function () {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });

    it("creates an empty array for the address", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
     });

    it("creates a new instance of Contact", function() {
      var testContact = Contact.createName();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
  });

  describe("createName", function() {
    it("initializes the contact", function() {
      var testContact = Contact.createName("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });

    it ("adds the contact to the .all property", function() {
      var testContact = Contact.createName();
      Contact.all.should.eql([testContact]);
    });
  });
});

//     it("adds the address to the addresses property of the contact", function() {
//     var testContact = Contact.createName();
//     var testAddress = testContact.createAddress();
//     testContact.addresses.should.eql([testAddress]);
//   });
     


describe("Phone", function(){
  describe("initialize", function() {
    it("sets the area code, first three, and last four numbers", function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("334", "332", "2700");
      testPhone.areaCode.should.equal("334");
      testPhone.firstThreeNumbers.should.equal("332");
      testPhone.lastFourNumbers.should.equal("2700");
    });

    it("creates an empty array for the phone number", function () {
      var testPhone = Object.create(Contact);
      testPhone.initialize("334", "332", "2700");
      testPhone.phoneNumbers.should.eql([]);
    });

  describe("createPhone", function() {
    it("initializes the phone number", function() {
        var testPhone = Phone.createPhone("334", "332","2700");
        testPhone.phoneNumbers.should.eql([]);
      });
    });
    
  describe("phoneNumber", function() {
    it("returns a phone number with nice formatting", function(){
      var testPhone = Object.create(Phone);
      testPhone.areaCode = "545";
      testPhone.firstThreeNumbers = "551";
      testPhone.lastFourNumbers = "1234"; 
      testPhone.phoneNumber().should.equal("545-551-1234");
    });
  });

//   describe("valid", function() {
//     it("returns false for an entry containing non-number characters", function() {
//       var testPhone = Object.create(Phone);
//       testPhone.areaCode = "332";
//       testPhone.firstThreeNumbers = "34!";
//       testPhone.lastFourNumbers = "R2D2";
//       testPhone.valid().should.equal(false);
//     });

//     it("returns true for a valid phone number", function() {
//       var testPhone = Object.create(Phone);
//       testPhone.areaCode = "332";
//       testPhone.firstThreeNumbers = "344";
//       testPhone.lastFourNumbers = "5698";
//       testPhone.valid().should.equal(true);
//     });
    });
});





// describe("Address", function () {
//   describe("initialize", function() {
//     it("sets the street, city, and state", function() {
//       var testAddress = Object.create(Address);
//       testAddress.initialize("1234 39th Ave", "Portland", "Oregon");
//       testAddress.street.should.equal("1234 39th Ave");
//       testAddress.city.should.equal("Portland");
//       testAddress.state.should.equal("Oregon");
//     });
//   });
//   describe("createAddress", function() {
//     it("creates an address object", function() {
//       var testContact = Contact.createName();
//       var testAddress = testContact.createAddress();
//       Address.isPrototypeOf(testAddress).should.equal(true);
//     });
//   describe("fullAddress", function() {
//     it("returns the full address with nice formatting", function() {
//       var testAddress = Object.create(Address);
//       testAddress.street = "123 4th Ave";
//       testAddress.city = "Portland";
//       testAddress.state = "Oregon";
//       testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
//     });
//   });
//   describe("valid", function() {
//     it("returns false if City is not a string", function() {
//       var testAddress = Object.create(Address);
//       testAddress.city = "125Dre";
//       testAddress.street = "Street";
//       testAddress.valid().should.equal(false);
//     });
//     it("returns true if City is a string", function() {
//       var testAddress = Object.create(Address);
//       testAddress.city = "City";
//       testAddress.street = "Street";
//       testAddress.valid().should.equal(true);
//     });
//     it("returns false if the string is fewer than four characters", function() {
//       var testAddress = Object.create(Address);
//       testAddress.street = "Glo";
//       testAddress.city = "City";
//       testAddress.valid().should.equal(false);
//     });
//   });
// });

