DECLARE
    CURSOR c is select CustomerID, Age
    FROM CUSTOMERS;

BEGIN
    For customer in c LOOP
        if customer.Age > 60 then
            update Loans set InterestRate = InterestRate-1
            where CustomerID = customer.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: '|| customer.CustomerID);
        end if;
    end loop;
end;