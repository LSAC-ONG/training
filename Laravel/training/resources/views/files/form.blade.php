<html>

<head>


</head>


<body>

<form method="POST" action="{{route('submitForm')}}">
    @csrf
    <label> Name</label>
    <input type="text" name="name" value="{{old('name')}}">
    @error('name')
        <p style="color:red">Acest camp este obligatoriu</p>
    @enderror
    <br>
    <label>Body</label>
    <textarea name="body">{{old('body')}}</textarea>
    @error('body')
    <p style="color:red">Acest camp este obligatoriu</p>
    @enderror
    <br>
    <label>Slug</label>
    <input type="text" name="slug" value="{{old('slug')}}">
    @error('slug')
    <p style="color:red">Acest camp este obligatoriu</p>
    @enderror
    <br>
    <input type="submit" value="Submit">
</form>


</body>

</html>
