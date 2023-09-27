print('Solution for A3, Task 3');
print('============================');
print('Student number: 7364283'    );
print('Name: Shaik Dawood Shameem Ahamed'         );
print('Date: 23 May 2023'           );
print('============================');
print('');

print('List the customer name, address and the created shopping cart who purchased product P1001');
print('');
print('db.shoppingCart.aggregate([{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},{$match: {"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1001"}}]).pretty()')
print('');
db.shoppingCart.aggregate([
{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},
{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},
{$match: {"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1001"}}
]).pretty();

print('');
print('List the customer name, address, and the created shopping cart of the customer who created a shopping cart on 06 May 2023 (ISODate("023-05-06T00:00:00Z")). Please do not show the customer id.');
print('');
print('db.shoppingCart.aggregate([{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},{$match: {"CUSTOMER.creates.SHOPPINGCART.dateCreated":ISODate("2023-05-06T00:00:00Z")}}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},
{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},
{$match: {"CUSTOMER.creates.SHOPPINGCART.dateCreated":ISODate("2023-05-06T00:00:00Z")}}
]).pretty();
print('');

print('Find the total number of shopping cart created by each customer. For each customer, list his/her email address and the total number of shopping cart created.');
print('');
print('db.shoppingCart.aggregate([{$unwind: "$CUSTOMER.creates.SHOPPINGCART"},{$group:{_id:"$CUSTOMER.customerEmail", "Total number of Shopping cart":{"$sum":1}}}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind: "$CUSTOMER.creates.SHOPPINGCART"},
{$group:{_id:"$CUSTOMER.customerEmail", "Total number of Shopping cart":{"$sum":1}}}
]).pretty();
print('');

print('Find the products that have been included in at least 2 or 3 shopping carts.');
print('');
print('db.shoppingCart.find({$or:[{"PRODUCT.includedIn":{"$size":3}},{"PRODUCT.includedIn":{"$size":2}}]}).pretty()');
print('');
db.shoppingCart.find(
{$or:[{"PRODUCT.includedIn":{"$size":3}},{"PRODUCT.includedIn":{"$size":2}}]}
).pretty();
print('');

print('For each price base, list the price base and the total number of each price base.');
print('');
print('db.shoppingCart.aggregate([{$unwind: "$PRODUCT"},{$group:{_id:"$PRODUCT.price.base", "Total number of price base":{"$sum":1}}}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind: "$PRODUCT"},
{$group:{_id:"$PRODUCT.price.base", "Total number of price base":{"$sum":1}}}
]).pretty();
print('');

print('Find the customers who have purchased both the products P1002 and P1003.');
print('');
print('db.shoppingCart.aggregate([{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},{$match:{$and:[{"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1003"},{"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1002"}]}}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind:"$CUSTOMER.creates.SHOPPINGCART"},
{$project:{"CUSTOMER.customerName":1, "CUSTOMER.customerAddress":1,"CUSTOMER.creates.SHOPPINGCART":1}},
{$match:{$and:[{"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1003"},{"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId":"P1002"}]}}
]).pretty();
print('');

print('Find the products that have not been included in any of the shopping cart.');
print('');
print('db.shoppingCart.aggregate([{$unwind: "$PRODUCT"},{"$match":{"PRODUCT.includedIn": null}}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind: "$PRODUCT"},
{"$match":{"PRODUCT.includedIn": null}}
]).pretty();
print('');

print('Find the total number of customers who do not provide his/her telephone number.');
print('');
print('db.shoppingCart.aggregate([{$unwind: "$CUSTOMER"},{"$match":{"CUSTOMER.customerPhone": null}},{"$count": "Total number of customers with no phone number"}]).pretty()');
print('');
db.shoppingCart.aggregate([
{$unwind: "$CUSTOMER"},
{"$match":{"CUSTOMER.customerPhone": null}},
{"$count": "Total number of customers with no phone number"}
]).pretty();
print('');

