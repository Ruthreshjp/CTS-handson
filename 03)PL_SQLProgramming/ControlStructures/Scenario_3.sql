DECLARE
    CURSOR c IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30;
BEGIN
    FOR loan IN c LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '|| loan.CustomerID || ' has Loan '||
             loan.LoanID || ' due on '|| loan.DueDate );
    END LOOP;
END;