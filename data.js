// SQL statements to create user and info table

// create database College;
// use college;
// create table user (name varchar(50), dob date , email varchar(250), phone int primary key, address varchar(500));
// insert into user values('Kashish', '1990-12-10' , 'kasishagarwal@gmail.com', 9929913786, 'sodala jaipur' );
// alter table user modify column phone bigInt;
// select * from user;
// create table info (rollno int primary key, semester int , marks int );
// insert into info values(2, 8 , 92 );
// select * from info;

// CURL commands

// get 
// curl -v http://localhost:4500/user/all
// post
// curl -d "{\"name\":\"riya\", \"dob\":\"2023-01-01\", \"email\":\"riya@gmail\", \"phone\":9829014299, \"address\":\"kota\"}" -H "Content-Type: application/json" http://localhost:4500/user/insert
// Put

// delete
// curl -X DELETE http://localhost:4500/user/delete/98845432 