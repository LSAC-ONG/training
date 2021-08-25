package com.radu;

public class Cat extends Animal implements Action{

    static int counter = 0;

    public Cat(String type, String color) {
        super(type, color);
        ++counter;
    }

    @Override
    public void eat() {
        System.out.println("I can eat Whiskas");
    }

    @Override
    public void run() {
        System.out.println("RUUUUN");
    }
}
