var collection2 = [{
  first: "Romeo", last: "Montague" }, {
  first: "Mercutio", last: "Montague" }, {
  first: "Tybalt", last: "Capulet" }]
  var collection3 = [{
    first: "Romeo", last: "Montague" }, {
    first: "Mercutio", last: null }, {
    first: "Tybalt", last: "Capulet" }, {
    first: "Tybalt", last: "Capulet" }]
describe('where', function(){
  it('Should return the key value pair for the name last name entered', function(){
    expect(where([{first: "Tybalt", last: "Capulet" }], { last: "Capulet"})).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });
  it('Should return the key value pair for the name last name entered when there two names in the collection', function(){
    expect(where([{first: "Romeo", last: "Montague" },{first: "Tybalt", last: "Capulet" }], { last: "Capulet"})).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });
<<<<<<< HEAD
  it('Should return the key value pair for the name last name entered when there three names in the collection', function(){
    expect(where(collection2, { last: "Capulet"})).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });
=======
  it('Should return the key value pair for the name last name entered when there two names in the collection', function(){
    expect(where(collection2, { last: "Capulet"})).toEqual([{ first: "Tybalt", last: "Capulet" }]);
  });
  it('Should return the key value pair for the two items that match the source', function(){
    expect(where(collection3, { last: "Capulet"})).toEqual([{ first: "Tybalt", last: "Capulet" },{ first: "Tybalt", last: "Capulet" }]);
  });
  it('Should not return an object from the collection if not every key value pair is the same', function(){
    expect(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })).toEqual([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
  });
>>>>>>> 4067b547d700fde7aedd86bc2287850bb9ea7b4f
});
