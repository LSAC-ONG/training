package com.radu;

public abstract class Animal {
    private String type;
    private String color;

    public Animal(String type, String color) {
        this.type = type;
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setColor(String color) {
        System.out.println("Culoarea se va schimba...");
        this.color = color;
    }

    public abstract void eat();

    @Override
    public String toString() {
        return "Tu esti un animal";
    }
}
