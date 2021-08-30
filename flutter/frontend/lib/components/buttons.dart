import 'package:flutter/material.dart';

Widget createButton(context, navigatorKey, String path, String caption) {
  return Padding(
    padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
    child: Container(
      height: 100.0,
      width: MediaQuery.of(context).size.width / 2.5,
      child: RaisedButton(
        onPressed: () {
          navigatorKey.currentState.pushNamed(path);
        },
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
                caption,
                textAlign: TextAlign.center,
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}