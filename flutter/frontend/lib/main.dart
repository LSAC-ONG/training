import 'package:flutter/material.dart';
import 'package:frontend/auth/login.dart';
import 'package:frontend/auth/register.dart';
import 'package:frontend/auth/user.dart';
import 'package:frontend/components/buttons.dart';
import 'package:frontend/play.dart';
import 'package:frontend/server.dart';
import 'dart:io';

import 'package:shared_preferences/shared_preferences.dart';

final GlobalKey<NavigatorState> navigatorKey = new GlobalKey<NavigatorState>();
final server = Server(url: 'https://192.168.2.39:5100/api');

User user;

class MyHttpOverrides extends HttpOverrides {
  @override
  HttpClient createHttpClient(SecurityContext context){
    return super.createHttpClient(context)
      ..badCertificateCallback = (X509Certificate cert, String host, int port)=> true;
  }
}

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  HttpOverrides.global = new MyHttpOverrides();
  SharedPreferences prefs = await SharedPreferences.getInstance();

  user = User(
    jwt: prefs.getString('jwt'),
    name: prefs.getString('name'),
    id: prefs.getString('id'),
    email: prefs.getString('email'),
  );

  runApp(MaterialApp(
    navigatorKey: navigatorKey,
    routes: {
      '/landing': (context) => LandingPage(),
      '/register': (context) => Register(),
      '/login': (context) => Login(),
      '/home': (context) => HomePage(),
      '/play': (context) => Play(),
    },
    title: 'Title',
    theme: ThemeData(
      primarySwatch: Colors.orange,
    ),
    home: user.jwt != null ? HomePage() : LandingPage()
  ));
}

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade50,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                createButton(context, navigatorKey, '/register', 'Register'),
                createButton(context, navigatorKey, '/login', 'Login'),
              ],
            )
          ],
        )
      )
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade50,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text('You were successful!', style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold,),),
            createButton(context, navigatorKey, '/play', "Let's play"),
          ],
        )
      ),
    );
  }
}