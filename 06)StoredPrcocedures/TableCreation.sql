CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE
);
INSERT INTO Accounts VALUES (1,101,'Savings',1000,SYSDATE);
INSERT INTO Accounts VALUES (2,102,'Checking',1500,SYSDATE);
INSERT INTO Accounts VALUES (3,103,'Savings',2000,SYSDATE);
INSERT INTO Accounts VALUES (4,104,'Savings',5000,SYSDATE);
INSERT INTO Accounts VALUES (5,105,'Checking',3000,SYSDATE);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

INSERT INTO Employees
VALUES (1,'Alice Johnson','Manager',70000,'HR',
TO_DATE('2015-06-15','YYYY-MM-DD'));

INSERT INTO Employees
VALUES (2,'Bob Brown','Developer',60000,'IT',
TO_DATE('2017-03-20','YYYY-MM-DD'));

INSERT INTO Employees
VALUES (3,'David Lee','Tester',50000,'IT',
TO_DATE('2018-05-10','YYYY-MM-DD'));

INSERT INTO Employees
VALUES (4,'Emma Wilson','Analyst',55000,'Finance',
TO_DATE('2019-08-12','YYYY-MM-DD'));

INSERT INTO Employees
VALUES (5,'John Smith','Executive',65000,'HR',
TO_DATE('2016-11-25','YYYY-MM-DD'));

