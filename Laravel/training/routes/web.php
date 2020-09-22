<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/posts/{post:slug}', 'App\Http\Controllers\PostController@index');
Route::get('/posts', 'App\Http\Controllers\PostController@listPosts');

Route::get('/posts/new/add', 'App\Http\Controllers\PostController@listForm');
Route::post('/posts/new/add', 'App\Http\Controllers\PostController@saveForm')->name('submitForm');
