import 'dart:convert';
import 'package:frontend/components/forms.dart';
import 'dart:developer';
import 'package:http/http.dart' as http;
import './../main.dart';
import 'package:flutter/material.dart';

class RegisterJSON {
  final bool success;
  final String message;

  RegisterJSON({@required this.success, @required this.message});

  factory RegisterJSON.fromJSON(Map<String, dynamic> json) {
    return RegisterJSON(success: json['success'], message: json['msg']);
  }
}

register(name, email, password) async {
  var url = '${server.url}/users/register';

  final http.Response response = await http.post(
    Uri.parse(url),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      "name": name,
      'email': email,
      'password': password,
    })
  );

  if (response.statusCode == 200) {
    var resp = RegisterJSON.fromJSON(jsonDecode(response.body));

    if (resp.success) {
      navigatorKey.currentState.pushNamed('/login');
    }
    else {
      log('${resp.message}');
    }
  }
  else {
    log('urat din partea ta');
  }
}

class Register extends StatelessWidget {
  var name, email, password;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.orange.shade200,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Register.",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 25,
                color: Colors.black,
              ),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(
                MediaQuery.of(context).size.width / 15,
                MediaQuery.of(context).size.height / 50,
                MediaQuery.of(context).size.width / 15,
                15
              ),
              child: Card(
                color: const Color(0xffF7A954),
                shadowColor: Colors.black,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(60),
                ),
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                    MediaQuery.of(context).size.width / 15,
                    MediaQuery.of(context).size.height / 50,
                    MediaQuery.of(context).size.width / 15,
                    MediaQuery.of(context).size.height / 50
                  ),
                  child: SizedBox(
                    height: MediaQuery.of(context).size.height / 2.2,
                    width: MediaQuery.of(context).size.width,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        createForm('Name', 'Ana Popescu', Icons.people, false, (value) {name = value;}),
                        createForm('Email', 'ana.popescu@mail.com', Icons.email, false, (value) {email = value;}),
                        createForm('Password', 'parola123', Icons.lock, true, (value) {password = value;}),
                        Container(
                          height: 50.0,
                          width: MediaQuery.of(context).size.width / 2,
                          child: RaisedButton(
                            onPressed: () => register(name, email, password),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(80.0)),
                            padding: EdgeInsets.all(0.0),
                            child: Ink(
                              decoration: BoxDecoration(
                                  gradient: LinearGradient(colors: [Color(0xffF7A954), Color(0xffF78354)],
                                    begin: Alignment.centerLeft,
                                    end: Alignment.centerRight,
                                  ),
                                  borderRadius: BorderRadius.circular(30.0)
                              ),
                              child: Container(
                                constraints: BoxConstraints(maxWidth: 300.0, minHeight: 50.0),
                                alignment: Alignment.center,
                                child: Text(
                                  "Register",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 20,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}