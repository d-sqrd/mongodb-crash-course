//Consider the following JSON data
inventory = [
  { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: ["A", "B", "C"] },
  { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: ["B"] },
  { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: ["A", "B"] },
  { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: ["B", "A"] },
  {
    _id: 5,
    item: { name: "mn", code: "000" },
    qty: 20,
    tags: [["A", "B"], "C"],
  },
];

/*
 * db.inventory.find({tags: {$eq: "A"}}) =>
  [
  {
    _id: 1,
    item: { name: 'ab', code: '123' },
    qty: 15,
    tags: [ 'A', 'B', 'C' ]
  },
  {
    _id: 3,
    item: { name: 'ij', code: '456' },
    qty: 25,
    tags: [ 'A', 'B' ]
  },
  {
    _id: 4,
    item: { name: 'xy', code: '456' },
    qty: 30,
    tags: [ 'B', 'A' ]
  }
]
*/

/*
 * db.inventory.find({tags: {$eq: ["B"]}}) => 
[
  { _id: 2, item: { name: 'cd', code: '123' }, qty: 20, tags: [ 'B' ] }
]
 */

/*
 * db.inventory.find({tags: {$eq: ["A", "B"]}}) => 

[
  {
    _id: 3,
    item: { name: 'ij', code: '456' },
    qty: 25,
    tags: [ 'A', 'B' ]
  },
  {
    _id: 5,
    item: { name: 'mn', code: '000' },
    qty: 20,
    tags: [ [ 'A', 'B' ], 'C' ]
  }
]

*/

/*
 * db.inventory.find({tags: {$eq: ["B","A"]}}) => 
[
  {
    _id: 4,
    item: { name: 'xy', code: '456' },
    qty: 30,
    tags: [ 'B', 'A' ]
  }
]
*/

// Consider the following docs

const company = [
  { _id: 1, company: "MongoDB" },
  { _id: 2, company: "MongoDB2" },
];

/**
 * db.companies.find( { company: { $eq: /MongoDB/ } }, {_id: 0 } ) => this won't match anything since we are explicitly mentioning using "$eq" operator to match with a regex data type but "company" field is of string data type
 * To handle this scenario where we want to match a string field using a regex expression, use the following queries:
 db.company.find({company: /MongoDB/})
 db.company.find({company: {$regex: /MongoDB/}})
    Result of above queries:
[
  { _id: 1, company: "MongoDB" },
  { _id: 2, company: "MongoDB2" },
]
  * So we can conclude that $eq takes into account the data type as well(like === operator in JS)   
 */
