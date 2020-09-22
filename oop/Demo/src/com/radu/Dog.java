package com.radu;

public class Dog extends Animal implements Action{

    static int counter = 0;

    public Dog(String type, String color) {
        super(type, color);
        ++counter;
    }

    public void bark() {
        System.out.println("Ham ham");
    }

    public void bark(int number) {
        for (int i = 0; i < number; ++i) {
            System.out.println("Ham ham");
        }
    }

    @Override
    public void eat() {
        System.out.println("I can eat Pedigree");
    }

    @Override
    public void run() {
        System.out.println("I can't run!!");
    }

}
