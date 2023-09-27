print('Solution for A3, Task 2');
print('============================');
print('Student number: 7364283'    );
print('Name: Shaik Dawood Shameem Ahamed'         );
print('Date: 23 May 2023'           );
print('============================');
print('');

print('Before updating the closing date of cart001 of customer c12345 to 15 May 2023');
db.shoppingCart.find().pretty();

print('After updating the closing date of cart001 of customer c12345 to 15 May 2023');
print('');
print('db.shoppingCart.update({"_id":"C12345","CUSTOMER.creates.SHOPPINGCART.cartId":"cart001"},{$set:{"CUSTOMER.creates.SHOPPINGCART.$.dateClosed":new Date("2023-05-15")}})');
print('');
db.shoppingCart.update(
{"_id":"C12345","CUSTOMER.creates.SHOPPINGCART.cartId":"cart001"},
{$set:{"CUSTOMER.creates.SHOPPINGCART.$.dateClosed":new Date("2023-05-15")}}
);

db.shoppingCart.find().pretty();

print('');
print('Before deleting cart005 of customer c12347');
db.shoppingCart.find().pretty();

print('After deleting cart005 of customer c12347');
print('');
print('db.shoppingCart.update({"_id":"C12347", "CUSTOMER.customerId":"C12347"},{$pull:{"CUSTOMER.creates.SHOPPINGCART":{"cartId":"cart005"}}})');
print('');
db.shoppingCart.update(
{"_id":"C12347", "CUSTOMER.customerId":"C12347"},
{$pull:{"CUSTOMER.creates.SHOPPINGCART":{"cartId":"cart005"}}}
);

db.shoppingCart.find().pretty();


