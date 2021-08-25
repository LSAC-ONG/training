<html>

<head>
</head>


<body>

<ul>
    Lista cu postari:

    @foreach($posts as $post)
        <li>{{$post->name}}</li>
    @endforeach
</ul>

</body>

</html>
