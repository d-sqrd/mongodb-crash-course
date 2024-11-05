// This file contains some code snippets and codes for some of the nuances and edge cases/exceptions for MongoDB

/*
 * Difference between updateOne() and replaceOne()
    updateOne() only updates the fields mentioned in the method(using $set: {<key>:<updatedValue>}) and not the entire document
    repalceOne() replaces the entire document itself -> if a document is a box and then replaceOne() removes this existing cardboard box and replaces it with an entirely  new one
    
    example-1:
    Consider the following documents: [{_id: "doc1", name: "Debarshi", age: 25}, {_id: "doc2", name: "Ram", age: 30}]
    db.collection.updateOne({name: "Debarshi"}, {$set: {age: 45}}) =>
        [{_id: "doc1", name: "Debarshi", age: 45}, {_id: "doc2", name: "Ram", age: 30}]
    db.collection.replaceOne({name: "Debarshi"}, {age: 45}) => 
        [{_id: "doc1", age: 45} {_id: "doc2", name: "Ram", age: 30}]  // entire doc replaced and the name key was lost

    example-2:
    Consider the following documents: [{_id: "doc1", name: "Debarshi", age: 25}, {_id: "doc2", name: "Ram", age: 30}]
    db.collection.replaceOne({}, {address: "Kolkata"}) => 
        [{_id: "doc1", address: "Kolkata"}, {_id: "doc2", name: "Ram", age: 30}]    // if we passs {} as the first parameter of replaceOne() then it replaces the first document of the collection

    * Capped collection in MongoDB
    https://www.geeksforgeeks.org/capped-collections-in-mongodb/

    * Querying documents that contain array fields 
    https://www.geeksforgeeks.org/mongodb-query-an-array/
 */
