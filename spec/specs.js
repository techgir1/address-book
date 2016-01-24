describe('Contact', function() {
	it("creates a new contact with the given properties", function() {
		var testContact = new Contact("Beth","Foster");
		expect(testContact.firstName).to.equal("Beth");
		expect(testContact.lastName).to.equal("Foster");
		expect(testContact.addresses).to.eql([]);
  });
});