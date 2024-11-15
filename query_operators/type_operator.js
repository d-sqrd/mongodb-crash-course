// Consider the following JSON data:

const addressBook = [
  { _id: 1, address: "2030 Martian Way", zipCode: "90698345" },
  { _id: 2, address: "156 Lunar Place", zipCode: 43339374 },
  { _id: 3, address: "2324 Pluto Place", zipCode: NumberLong(3921412) },
  { _id: 4, address: "55 Saturn Ring", zipCode: NumberInt(88602117) },
  { _id: 5, address: "104 Venus Drive", zipCode: ["834847278", "1893289032"] },
];

/*
    The following queries return all documents where zipCode is the BSON type string or is an array containing an element of the specified type:

    db.addressBook.find( { zipCode : { $type : "string" } } ) =>
        [
            { _id : 1, address : "2030 Martian Way", zipCode : "90698345" },
            { _id : 5, address : "104 Venus Drive", zipCode : [ "834847278", "1893289032" ] }
        ]
 */
