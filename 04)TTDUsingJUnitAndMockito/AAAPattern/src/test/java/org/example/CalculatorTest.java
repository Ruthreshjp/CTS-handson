package org.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setup Method Executed");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Method Executed");
        calculator = null;
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 20;
        System.out.println("Arrange");

        int result = calculator.add(a, b);
        System.out.println("Act");

        assertEquals(30, result);
        System.out.println("Assert");

        System.out.println("Test Passed");
    }
}