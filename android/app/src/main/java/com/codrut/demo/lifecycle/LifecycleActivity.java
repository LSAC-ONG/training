package com.codrut.demo.lifecycle;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

import com.codrut.demo.R;

public class LifecycleActivity extends AppCompatActivity {

    private final String TAG = this.getClass().getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lifecycle);
        Log.d(TAG, "This is the first method called and it's used for initialization!");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "This callback is called by the system when the activity is visible!");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d(TAG, "This callback is called by the system when the user starts interacting with the app!");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "This callback is called by the system when the user can't interact anymore with the activity!");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "This callback is called by the system when the activity is no longer visible!");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "This callback is called by the system when the activity is restarted after being stopped!");

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "This callback is called by the system when the activity is freed from the system!");

    }
}