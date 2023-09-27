print('Solution for A3, Task 1');
print('============================');
print('Student number: 7364283'    );
print('Name: Shaik Dawood Shameem Ahamed'         );
print('Date: 23 May 2023'           );
print('============================');
print('');

print('Creating a database company with 2 departments, 2 projects with 2 deadlines each');
db.sdsa.insert(
{"COMPANY":{"name":"ABC Company",
	    "city":"Wollongong",
	    "street":"123 street",
	    "bldg#":["23","34","45"],
	    "consists of":{"DEPARTMENT":[{"dname" : "Marketing",
						  "chairperson": "Shameem",
						  "budget" : "200000"},
					{"dname":"Communication",
						"chairperson":"Ahamed",
						"budget":"40000"}
]},
	   "implements": {"PROJECT":[{"code":"PROJ001",
				      "title":"budget",
					"has":{"DEADLINES":[{"number":"1",
							     "date":"24-5-23"},
						{"number":"2",
						"date":"24-7-23"}]}},
				      {"code":"PROJ002",
				       "title":"Recruitment",
					"has":{"DEADLINES":[{"number":"1",
							     "date":"24-8-23"},
						{"number":"2",
						"date":"24-10-23"}]}}]}	    
}
}
);

db.sdsa.find().pretty();

