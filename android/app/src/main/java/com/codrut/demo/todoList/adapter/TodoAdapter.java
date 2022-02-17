package com.codrut.demo.todoList.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.codrut.demo.R;
import com.codrut.demo.data.domain.Todo;
import com.codrut.demo.todoList.ItemClickHandler;

import java.util.List;

public class TodoAdapter extends RecyclerView.Adapter<TodoAdapter.TodoViewHolder> {

    private final ItemClickHandler handler;
    private List<Todo> todoList;

    public TodoAdapter(List<Todo> todoList, ItemClickHandler handler) {
        this.todoList = todoList;
        this.handler = handler;
    }

    @NonNull
    @Override
    public TodoViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View item = LayoutInflater.from(parent.getContext()).inflate(R.layout.todo_list_item, parent, false);
        return new TodoViewHolder(item);
    }

    @Override
    public void onBindViewHolder(@NonNull TodoViewHolder holder, int position) {
        Todo current = todoList.get(position);

        holder.titleTextView.setText(current.getName());
        holder.descriptionTextView.setText(current.getDescription());
        holder.completeCheckBox.setChecked(current.isChecked());

        holder.completeCheckBox.setEnabled(false);
        holder.itemView.setOnClickListener(v -> handler.onClick(position));
        holder.itemView.setOnLongClickListener(v -> {
            handler.onLongClick(position);
            return true;
        });
    }

    @Override
    public int getItemCount() {
        return todoList.size();
    }

    public void updateList(List<Todo> newList) {
        todoList = newList;
        notifyDataSetChanged();
    }

    static class TodoViewHolder extends RecyclerView.ViewHolder {

        final TextView titleTextView;
        final TextView descriptionTextView;
        final CheckBox completeCheckBox;

        public TodoViewHolder(@NonNull View itemView) {
            super(itemView);
            this.titleTextView = itemView.findViewById(R.id.title_textView);
            this.descriptionTextView = itemView.findViewById(R.id.description_textView);
            this.completeCheckBox = itemView.findViewById(R.id.complete_checkBox);
        }
    }
}
