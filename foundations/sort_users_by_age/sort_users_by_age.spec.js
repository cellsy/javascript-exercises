const sortByAge = require('./sortByAge');

describe('sortByAge', () => {
  test('sorts by age', () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary]

    sortByAge(arr)

    expect(arr[0].name).toEqual("John")
  });
});