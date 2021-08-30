import 'package:flutter/material.dart';

Widget createForm(label, hint, icon, doObscure, cb(value)) {
  return Expanded(
    child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
      child: TextField(
        onChanged: (value) {
          cb(value);
        },
        obscureText: doObscure,
        obscuringCharacter: '*',
        decoration: InputDecoration(
          suffixIcon: Icon(icon),
          border: UnderlineInputBorder(),
          labelText: label,
          hintText: hint,
        ),
      ),
    ),
  );
}