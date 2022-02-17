package com.codrut.demo.todoList;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.codrut.demo.R;
import com.codrut.demo.data.TodoRepository;
import com.codrut.demo.data.domain.Todo;
import com.codrut.demo.todoEdit.TodoDetailsActivity;
import com.codrut.demo.todoList.adapter.TodoAdapter;

public class TodoListActivity extends AppCompatActivity implements ItemClickHandler {

    private final TodoRepository repository = TodoRepository.getInstance();
    private TodoAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        RecyclerView recyclerView = findViewById(R.id.recyclerView);

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        adapter = new TodoAdapter(repository.getAll(), this);
        recyclerView.setAdapter(adapter);
    }

    @Override
    public void onClick(Integer id) {
        Todo selectedItem = repository.get(id);
        Todo newEntity = new Todo(id, selectedItem.getName(), selectedItem.getDescription(),
                !selectedItem.isChecked());
        Log.d("TodoList", newEntity.toString());

        repository.getAll().forEach(todo -> Log.d("TodoList", todo.toString()));
        repository.save(newEntity);
        adapter.updateList(repository.getAll());

        repository.getAll().forEach(todo -> Log.d("TodoList", todo.toString()));
    }

    @Override
    public void onLongClick(Integer id) {
        Intent intent = new Intent(this, TodoDetailsActivity.class);
        intent.putExtra(TodoDetailsActivity.ITEM_ID, id);
        startActivity(intent);
    }

    public void addItem(View v) {
        Intent intent = new Intent(this, TodoDetailsActivity.class);
        startActivity(intent);
    }
}