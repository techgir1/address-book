describe('Contact', function() {
	it("creates a new contact with the given properties", function() {
		var testContact = new Contact("Beth","Foster");
		expect(testContact.firstName).to.equal("Beth");
		expect(testContact.lastName).to.equal("Foster");
		expect(testContact.addresses).to.eql([]);
  });
});

it("adds the fullName method to all contacts", function() {
	var testContact = new Contact("Jeff","Teseniar");
	expect(testContact.fullName()).to.equal("Jeff Teseniar");
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
});

it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });