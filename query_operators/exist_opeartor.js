//The $exists operator matches documents that contain or do not contain a specified field, including documents where the field value is null.

// Consider the following JSON data:

const spices = [
  { saffron: 5, cinnamon: 5, mustard: null },
  { saffron: 3, cinnamon: null, mustard: 8 },
  { saffron: null, cinnamon: 3, mustard: 9 },
  { saffron: 1, cinnamon: 2, mustard: 3 },
  { saffron: 2, mustard: 5 },
  { saffron: 3, cinnamon: 2 },
  { saffron: 4 },
  { cinnamon: 2, mustard: 4 },
  { cinnamon: 2 },
  { mustard: 6 },
];

/*
 * db.spices.find( { saffron: { $exists: true } } ) => 
    [
        { saffron: 5, cinnamon: 5, mustard: null },
        { saffron: 3, cinnamon: null, mustard: 8 },
        { saffron: null, cinnamon: 3, mustard: 9 },
        { saffron: 1, cinnamon: 2, mustard: 3 },
        { saffron: 2, mustard: 5 },
        { saffron: 3, cinnamon: 2 },
        { saffron: 4 }
    ]

*/

/*
 * db.spices.find( { cinnamon: { $exists: false } } ) =>
    [
        { saffron: 2, mustard: 5 },
        { saffron: 4 },
        { mustard: 6 }
    ]
 */
