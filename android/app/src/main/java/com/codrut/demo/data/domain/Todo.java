package com.codrut.demo.data.domain;

import java.util.Objects;

public class Todo {

    private final String name;
    private final String description;
    private final boolean isChecked;
    private Integer id;

    public Todo(Integer id, String name, String description, boolean isChecked) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isChecked = isChecked;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public boolean isChecked() {
        return isChecked;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return isChecked == todo.isChecked && Objects.equals(name, todo.name) && Objects.equals(description, todo.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, description, isChecked);
    }

    @Override
    public String toString() {
        return "Todo{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", isChecked=" + isChecked +
                ", id=" + id +
                '}';
    }
}
