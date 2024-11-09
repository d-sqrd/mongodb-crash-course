/* 
    $not performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.
 */

/* 
    You must use the $not operator with another operator expression. For example, to use $not to perform an inequality check, use this syntax: 
        { price: { $not: { $eq: 1.99 } } }
        The preceding query is equivalent to:
            { price: { $ne: 1.99 } }
        
        The following $not query is invalid because it attempts to compare a field without an operator:
            { price: { $not: 1.99 } }        
*/
