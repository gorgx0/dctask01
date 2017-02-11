package com.mracinkrasowski;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;

/**
 * Created by gorg on 11.02.17.
 */
public class Task01Test {


    Task01 task01 = new Task01();

    @Test(expected = IllegalArgumentException.class)
    public void getValueZero() throws Exception {
        task01.getValue(0);
    }

    @Test
    public void getValueOne() throws Exception {
        assertThat("1 for 1", task01.getValue(1),is(equalTo(1)));
    }

    @Test
    public void getValueTwo() throws Exception {
        assertThat("1 for 2",task01.getValue(2), is(equalTo(1)));
    }

    @Test
    public void getValueSix() throws Exception {
        assertThat("8 for 6",task01.getValue(6),is(equalTo(8)));
    }

    @Test
    public void getValueEight() throws Exception {
        assertThat("21 for 8",task01.getValue(8),is(equalTo(21)));
    }
}