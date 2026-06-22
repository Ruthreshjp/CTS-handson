DECLARE
    CURSOR c IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR customer IN c LOOP
        IF customer.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Customer '|| customer.CustomerID|| ' promoted to VIP');
        END IF;
    END LOOP;
END;