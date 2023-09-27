
print('Solution for IT3 Task 1');
print('============================');
print('Student number: 7364283'    );
print('Name: Shaik Dawood Shameem Ahamed'         );
print('Date: 23 May 2023'           );
print('============================');
print('');
print('Display in a pretty format information about an employee number 11. Do not list information about trips performed by the employee.');
print('');
print('db.transport.find({"EMPLOYEE.e#":"11"},{"EMPLOYEE.trips":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.e#":"11"},
	{"EMPLOYEE.trips":0}
).pretty();
print('');
print('Display in a pretty format information about all mechanics. For each mechanic, list only employee number, name, and position.');
print('');
print('db.transport.find({"EMPLOYEE.position":"mechanic"},{"EMPLOYEE.e#":1, "EMPLOYEE.name":1,"EMPLOYEE.position":1}).pretty()');
db.transport.find(
	{"EMPLOYEE.position":"mechanic"},
	{"EMPLOYEE.e#":1, 
	 "EMPLOYEE.name":1,
	 "EMPLOYEE.position":1}
).pretty();
print('');
print('Display in a pretty format information about the trucks with the registration numbers PKR768 and PKR008 and SST005. Do not list identifiers of the documents.');
print('');
print('db.transport.find({"EMPLOYEE.e#":"11"},{"EMPLOYEE.trips":0}).pretty()');
print('');
db.transport.find(
	{"TRUCK.registration":{$in:["PKR768","PKR008","SST005"]}},
	{"_id":0}
).pretty();
print('');
print('Find the total number of employees');
print('');
print('db.transport.count({"EMPLOYEE.e#":{$gt: "0"}})');
print('');
db.transport.count({"EMPLOYEE.e#":{$gt: "0"}});
print('');
print('Find the total number of mechanics');
print('');
print('db.transport.count({"EMPLOYEE.position":"mechanic"})');
print('');
db.transport.count({"EMPLOYEE.position":"mechanic"});
print('');
print('Display in a pretty format the names and positions of all employees');
print('');
print('db.transport.find({"EMPLOYEE.e#":{$gt: "0"}},{"EMPLOYEE.name":1,"EMPLOYEE.position":1,"_id":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.e#":{$gt: "0"}},
	{"EMPLOYEE.name":1,
	 "EMPLOYEE.position":1,
	 "_id":0}
).pretty();
print('');
print('Display in a pretty format the registrations number of all trucks maintained by John Fox. there is no need to remove duplicates from a listing.');
print('');
print('db.transport.find({"EMPLOYEE.name":"John Fox"},{"EMPLOYEE.maintenances":1, "_id":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.name":"John Fox"},
	{"EMPLOYEE.maintenances":1,
	 "_id":0}
).pretty();
print('');
print('Display in a pretty format the names of mechanics who maintained a car with a registration LUCY01.');
print('');
print('db.transport.find({"EMPLOYEE.maintenances.registration":"LUCY01"},{"EMPLOYEE.name":1,"_id":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.maintenances.registration":"LUCY01"},
	{"EMPLOYEE.name":1,
	 "_id":0}
).pretty();
print('');
print('Display in a pretty format the names of drivers who performed no trips so far.');
print('');
print('db.transport.find({"EMPLOYEE.trips":null, "EMPLOYEE.name":{$not:{$eq:null}}},{"EMPLOYEE.name":1,"_id":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.trips":null, "EMPLOYEE.name":{$not:{$eq:null}}},
	{"EMPLOYEE.name":1,
	 "_id":0}
).pretty();
print('');
print('Display in a pretty format names of drivers who started at least on trip in Wollongong.');
print('');
print('db.transport.find({"EMPLOYEE.trips.legs":"Wollongong"},{"EMPLOYEE.name":1,"_id":0}).pretty()');
print('');
db.transport.find(
	{"EMPLOYEE.trips.legs":"Wollongong"},
	{"EMPLOYEE.name":1,
	 "_id":0}
).pretty();
print('');
