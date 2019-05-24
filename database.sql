-- NOTE THAT THE DATABASE NAMED USED IN THIS PROJECT IS
-- "joins-lecture"

-- Create the Person Table
CREATE TABLE "person" (
	"id" serial primary key,
	"name" varchar(80)
);

-- Create the Hobby Table
CREATE TABLE "hobby" (
	"id" serial primary key,
	"hobby_name" varchar(80)
);

-- Create the Junction table
CREATE TABLE "person_hobbies" (
	"id" serial primary key,
	"person_id" INT REFERENCES "person",
	"hobby_id" INT REFERENCES "hobby"
);

-- Person Table INSERTs
INSERT INTO "person" ("name")
VALUES ('Scott'), ('Rachael'), ('Myron'), ('Isaac'), ('Devon'), ('Austin'), ('Konou');

-- Hobby Table INSERTs
INSERT INTO "hobby" ("hobby_name")
VALUES ('Video Games'), ('Drawing'), ('Lettering'), ('Watching Netflix'), ('Reading'), ('Boxing'), ('Flying'), ('Hockey'), ('Sleep');

-- Junction Table INSERTs
INSERT INTO "person_hobbies" ("person_id", "hobby_id")
VALUES (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 1), (3, 2), (3, 3), (3, 4), (6, 9), (7, 7);

-- Give me all of it!
SELECT * FROM "person"
JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id";

-- Give me just the name and hobby!
SELECT "name", "hobby_name" FROM "person"
JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id";

-- Show me just Scotts hobbies
SELECT "name", "hobby_name" FROM "person"
JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id"
WHERE "name"='Scott';

-- Give me Scott's hobbies in Alpha order
SELECT "name", "hobby_name" FROM "person"
JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id"
WHERE "name"='Scott'
ORDER BY "hobby"."hobby_name" ASC;