import 'dart:convert';

import 'package:frontend/auth/user.dart';
import 'package:frontend/components/forms.dart';
import 'dart:developer';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import './../main.dart';
import 'package:flutter/material.dart';

class LoginJSON {
  final bool success;
  final String token;
  final User user;

  LoginJSON({@required this.success, @required this.token, @required this.user});

  factory LoginJSON.fromJSON(Map<String, dynamic> json) {
    return LoginJSON(
      success: json['success'],
      token: json['token'],
      user: new User.fromJSON(json['user']));
  }
}

login(email, password) async {
  log(email);
  log(password);
  var url = '${server.url}/users/login';

  final http.Response response = await http.post(
    Uri.parse(url),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'email': email,
      'password': password,
    })
  );

  if (response.statusCode == 200) {
    var resp = LoginJSON.fromJSON(jsonDecode(response.body));
    print(resp.user);
    if (resp.success) {
      user = resp.user;
      user.jwt = resp.token;

      SharedPreferences prefs = await SharedPreferences.getInstance();
      prefs.setString('email', user.email);
      prefs.setString('jwt', user.jwt);
      prefs.setString('id', user.id);
      prefs.setString('name', user.name);

      navigatorKey.currentState.popUntil((route) => false);
      navigatorKey.currentState.pushNamed('/home');
    }
    else {
      log('user does not exist');
    }
  }
  else {
    log('urat din partea ta');
  }
}

class Login extends StatelessWidget {
  var email, password;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.orange.shade200,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Login.",
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
                        createForm('Email', 'ana.popescu@mail.com', Icons.email, false, (value) {email = value;}),
                        createForm('Password', 'parola123', Icons.lock, true, (value) {password = value;}),
                        Container(
                          height: 50.0,
                          width: MediaQuery.of(context).size.width / 2,
                          child: RaisedButton(
                            onPressed: () => login(email, password),
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
                                  "Login",
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