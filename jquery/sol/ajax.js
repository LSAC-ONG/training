$(document).ready(function(){
    $('#fetchButton').click(function(e) {
        $.ajax({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json'
        }).done(function(posts) {
            posts.forEach(function(post){
                const postElement = `<h3>${post.title}</h3><p>${post.body}</p><br>`;
                $('#posts').append(postElement);
            })
        }).fail(function(jqXHR, textStatus) {
            alert(`Request failed: ${textStatus}`);
        });
    });
});