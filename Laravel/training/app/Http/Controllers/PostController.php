<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index(Post $post) {
        $data['post'] = $post;

        if (is_null($data['post'])) {
            abort(404, 'Error');
        }

        return view('files.fisier', $data);
    }

    public function listPosts() {
        $data['posts'] = Post::all();

        return view('posts.lists', $data);
    }

    public function listForm() {
        return view('files.form');
    }

    public function saveForm(Request $request) {

        $validatedData = $request->validate([
                'name' => 'required',
                'slug' => 'required|unique:posts',
                'body' => 'required',
            ]);

        $post = new Post();
        $post->likes = 150;
        $post->name = $request['name'];
        $post->body = $request['body'];
        $post->slug = $request['slug'];

        $post->save();

        return redirect()->back();
    }
}
