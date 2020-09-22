package com.radu;

public class Main {

    public static void main(String[] args) {

//        Animal panteraRoz = new Animal("mamifer", "negru");
//        Animal sobolan = new Animal("mamifer", "verde");
//
//        System.out.println("Culoarea este " + panteraRoz.getColor() + " si tipul animalului este " + panteraRoz.getType());
//        System.out.println(sobolan.getColor());
//
//        panteraRoz.setColor("purpuriu");
//
//        System.out.println("Culoarea este " + panteraRoz.getColor() + " si tipul animalului este " + panteraRoz.getType());


        Dog dog = new Dog("labrador", "alb");
        dog.eat();
        dog.bark();
        System.out.println("------------------");
        dog.bark(3);
        System.out.println("------------------");

        Cat cat = new Cat("persana", "negru");
        System.out.println(cat.getColor());
        cat.eat();

        System.out.println("------------------");
        System.out.println(Dog.counter);
        Cat cat2 = new Cat("persana", "negru");
        Cat cat3 = new Cat("persana", "negru");
        Cat cat4 = new Cat("persana", "negru");
        Dog dog2 = new Dog("asdasd", "asdasd");
        System.out.println("Numarul de instante ale clase Dog este " + Dog.counter);
        System.out.println("Numarul de instante ale clase Cat este " + Cat.counter);

        cat.run();
        dog.run();

        System.out.println("------------------");
        System.out.println(dog);
        System.out.println(cat);

    }
}
