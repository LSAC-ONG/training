import 'dart:developer';
import 'package:flutter/material.dart';
import 'dart:io';
import './main.dart';
import './components/buttons.dart';

class Play extends StatefulWidget {
  @override
  _PlayState createState() => _PlayState();
}

class _PlayState extends State<Play> {
  bool showText = false;

  void _showText() {
    log('beep');
    setState(() {
      showText = showText ? false : true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            showText ? Text('Hello there!') : Container(width: 0, height: 0,),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
              child: Container(
                height: 100,
                width: MediaQuery.of(context).size.width / 2,
                child: RaisedButton(
                  onPressed: () {_showText();},
                  shape: StadiumBorder(),
                  padding: EdgeInsets.all(0.0),
                  child: Ink(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [Color(0xffF7A954), Color(0xffF78354)],
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight,
                      ),
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                    child: Container(
                      constraints: BoxConstraints(maxWidth: 400.0, minHeight: 50.0),
                      alignment: Alignment.center,
                      child: Padding(
                        padding: EdgeInsets.all(10),
                        child: Text(
                          showText ? 'Click to unshow text!' : 'Click to show text!',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize: 25,
                          ),
                        ),
                      ),
                    ),
                  )
                ),
              ),
            )
          ],
        ),
      )
    );
  }
}
