package com.mracinkrasowski;

/**
 * Created by gorg on 11.02.17.
 */
public class Task01 {

    public Integer getValue(Integer n) {
        if(null==n || n<=0)
            throw new IllegalArgumentException("null not allowed");

        return calculation(n-1, 1,1);
    }

    // Fibonacci calculated using tail recursion
    // Recursion is not very best for java but tail recursion can be better :)

    private Integer calculation(Integer step, Integer acc, Integer current){
        return step > 1 ? calculation(step - 1, current, acc + current) : current;
    }
}
