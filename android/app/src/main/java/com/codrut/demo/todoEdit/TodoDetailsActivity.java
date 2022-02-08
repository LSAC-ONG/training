package com.codrut.demo.todoEdit;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.codrut.demo.R;
import com.codrut.demo.data.TodoRepository;
import com.codrut.demo.data.domain.Todo;
import com.codrut.demo.todoList.TodoListActivity;

public class TodoDetailsActivity extends AppCompatActivity {

    public static final String ITEM_ID = "ID";
    private final TodoRepository repository = TodoRepository.getInstance();
    private Integer id;
    private EditText titleEditText;
    private EditText descriptionEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_todo_details);

        titleEditText = findViewById(R.id.title);
        descriptionEditText = findViewById(R.id.description);

        if (getIntent().hasExtra(ITEM_ID)) {
            id = getIntent().getIntExtra(ITEM_ID, -1);
            populateData(id);
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        if(id != null)
            outState.putInt("ID_IMPORTANT", id);
        outState.putString("ITEM_NAME", titleEditText.getText().toString());
        outState.putString("ITEM_DESCRIPTION", descriptionEditText.getText().toString());
    }

    @Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        id = savedInstanceState.getInt("ID_IMPORTANT");
        titleEditText.setText(savedInstanceState.getString("ITEM_NAME"));
        descriptionEditText.setText(savedInstanceState.getString("ITEM_DESCRIPTION"));
    }

    public void saveItem(View v) {
        String title = titleEditText.getText().toString();
        String description = descriptionEditText.getText().toString();
        repository.save(new Todo(id, title, description, false));
        startActivity(new Intent(this, TodoListActivity.class));
    }

    public void populateData(Integer id) {
        Todo todo = repository.get(id);
        titleEditText.setText(todo.getName());
        descriptionEditText.setText(todo.getDescription());
    }
}