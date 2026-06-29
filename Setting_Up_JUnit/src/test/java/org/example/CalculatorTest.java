package org.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {

        Calculator calc = new Calculator();

        assertEquals(30, calc.add(10, 20));
    }
}