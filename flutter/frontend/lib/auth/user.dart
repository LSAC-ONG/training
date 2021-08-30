class User {
  User(
    {
      this.jwt,
      this.name,
      this.id,
      this.email,
    }
  );

  String jwt;
  String name;
  String email;
  String id;

  String toString() {
    return 'User: { email: ${email}, {name: ${name}, {jwt: ${jwt}, {id: ${id} }';
  }

  factory User.fromJSON(Map<String, dynamic> json) {
    var user = User(
      email: json['email'],
      name: json['name'],
      id: json['_id'],
    );

    return user;
  }
}
