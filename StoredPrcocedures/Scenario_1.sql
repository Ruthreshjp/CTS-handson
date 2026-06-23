CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01),
    LastModified = SYSDATE
    WHERE AccountType = 'Savings';

    Commit;
    DBMS_OUTPUT.PUT_LINE('Monthly interest updated for savings accounts.');
END;

BEGIN
    ProcessMonthlyInterest;
END;