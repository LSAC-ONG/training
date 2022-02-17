package com.codrut.demo.data;

import android.util.Log;

import com.codrut.demo.data.domain.Todo;

import java.util.ArrayList;
import java.util.List;

public class TodoRepository {
    private static TodoRepository INSTANCE = null;
    private final List<Todo> todoList = new ArrayList<>();

    public static TodoRepository getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new TodoRepository();
        }

        return INSTANCE;
    }

    public void save(Todo entity) {
        boolean isPresent = todoList.stream().anyMatch(todo -> todo.getId().equals(entity.getId()));
        if (isPresent) {
            todoList.set(entity.getId(), entity);
        } else {
            entity.setId(todoList.size());
            todoList.add(entity);
        }
    }

    public Todo get(Integer id) {
        return todoList.get(id);
    }

    public List<Todo> getAll() {
        return todoList;
    }

}
