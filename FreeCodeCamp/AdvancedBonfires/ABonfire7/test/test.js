describe("Person", ()=> {
    it("should have a method to get first name", ()=> {
      var person = new Person("Bob Ross");
        expect(person.getFirstName()).toEqual("Bob");
    });
    it("should have a method to get the last name", ()=> {
      var person = new Person("Bob Ross");
        expect(person.getLastName()).toEqual("Ross");
    });
    it("should have a method to get the full name", ()=> {
      var person = new Person("Bob Ross");
        expect(person.getFullName()).toEqual("Bob Ross");
    });
    it("should have a method to set the first name", ()=> {
      var person = new Person("Bob Ross");
      person.setFirstName("Matthew")
      expect(person.getFirstName()).toEqual("Matthew");
    });
    it("should have a method to set the last name", ()=> {
      var person = new Person("Bob Ross");
      person.setLastName("Knowles")
      expect(person.getLastName()).toEqual("Knowles");
    });
    it("should have a method to set the full name", ()=> {
      var person = new Person("Bob Ross");
      person.setFullName("Matthew Knowles")
      expect(person.getFullName()).toEqual("Matthew Knowles");
    });
});
