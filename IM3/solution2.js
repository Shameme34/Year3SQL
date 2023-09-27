print('Solution for IT3, Task 2');
print('============================');
print('Student number: 7364283'    );
print('Name: Shaik Dawood Shameem Ahamed'         );
print('Date: 23 May 2023'           );
print('============================');
print('');
print('Details of John Fox');

db.transport.find(
 {"EMPLOYEE.name":"John Fox"},
 {"EMPLOYEE.name":"John Fox", "EMPLOYEE.position":"mechanic"}
).pretty();

print('Removal of John Fox the mechanic');
print('db.transport.remove({"EMPLOYEE.name":"John Fox", "EMPLOYEE.position":"mechanic"})');
db.transport.remove(
   {"EMPLOYEE.name":"John Fox", "EMPLOYEE.position":"mechanic"}
);

print('Details of mechanic John Fox after removal');
print('db.transport.find({"EMPLOYEE.name":"John Fox"},{"EMPLOYEE.name":"John Fox","EMPLOYEE.position":"mechanic"}).pretty()');
db.transport.find(
 {"EMPLOYEE.name":"John Fox"},
 {"EMPLOYEE.name":"John Fox", "EMPLOYEE.position":"mechanic"}
).pretty();

print('Done!');
print('');
print('Details of employee 11 before the update');

db.transport.find(
 {"EMPLOYEE.e#":"11"},
 {"EMPLOYEE.trips":0}
).pretty();

print('Update by removing dob of employee 11');
print('db.transport.update({"EMPLOYEE.e#":"11"},{"$unset": {"EMPLOYEE.dob": null} })');
db.transport.update(
   {"EMPLOYEE.e#":"11"},
   {"$unset": {"EMPLOYEE.dob": null} }
);

print('Details of employee 11 after the update');
print('db.transport.find({"EMPLOYEE.e#":"11"}, {"EMPLOYEE.trips":0}).pretty()');
db.transport.find(
 {"EMPLOYEE.e#":"11"},
 {"EMPLOYEE.trips":0}
).pretty();

print('Done!');
print('');
print('Details of employee 11 before the update');

db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty();

print('Update by removing trip 7 of employee 11');
print('db.transport.update({"EMPLOYEE.e#":"11"},{$pull: {"EMPLOYEE.trips":{"trip number":"7"}}})');
db.transport.update(
   {"EMPLOYEE.e#":"11"},
   {$pull: {"EMPLOYEE.trips":{"trip number":"7"}}}
);

print('Details of employee 11 after the update');
print('db.transport.find({"EMPLOYEE.e#":"11"}).pretty()');
db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty();

print('Done!');
print('');
print('Details of employee 11 before new trip');

db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty();

print('Update by add new trip 999 to employee 11');
print('db.transport.update({"EMPLOYEE.e#":"11"},{$push: {"EMPLOYEE.trips":{"trip number":"999", "registration":"PKR786"}}})');
db.transport.update(
   {"EMPLOYEE.e#":"11"},
   {$push: {"EMPLOYEE.trips":{"trip number":"999", "registration":"PKR786"}}}
);

print('Details of employee 11 after the update');
print('db.transport.find({"EMPLOYEE.e#":"11"}).pretty()');
db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty();

print('Done!');
print('');
print('Details of employee 11 before new trip');

db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty()

print('Update by changin date of trip 15 of employee 11');
print('db.transport.update({"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"15"},{$set: {"EMPLOYEE.trips.$.trip date": "28-SEP-18"}})');
db.transport.update(
   {"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"15"},
   {$set: {"EMPLOYEE.trips.$.trip date": "28-SEP-18"}}
);

print('Details of employee 11 after the update');
print('db.transport.find({"EMPLOYEE.e#":"11"}).pretty()');
db.transport.find(
 {"EMPLOYEE.e#":"11"}
).pretty();

print('Done!');
