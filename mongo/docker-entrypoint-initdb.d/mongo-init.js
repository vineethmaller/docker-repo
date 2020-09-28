let admin = db.getSiblingDB("admin");

admin.createUser({
	user : "appAdmin", 
	password: "TtUBhMjOIfeV",
	db: "admin",
	roles: [
		{ 
			role: "clusterAdmin",
			db: "admin"
		},
		{
			role: "userAdminAnyDatabase",
			db: "admin"
		}
	]
});

admin.createCollection("users");

let adppDBName = db.getSiblingDB("appDBName");

appDBName.createUser({
	user: "appOwner",
	password: "EtMxw6ZY9jiG",
	db: "admin",
	roles: [
		{
			role: "readWrite",
			db: "appDBName"
		}
	]
});

appDBName.createCollection("users");