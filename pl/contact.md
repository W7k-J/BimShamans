---
layout: page
title: Kontakt
lang: pl
ref: contact
permalink: /pl/contact/
---

# Formularz Kontaktowy

<form action="/submit-form" method="post" enctype="multipart/form-data">
  <label for="imie">Imię (obowiązkowe):</label>
  <input type="text" id="imie" name="imie" required><br><br>

  <label for="nazwisko">Nazwisko (nieobowiązkowe):</label>
  <input type="text" id="nazwisko" name="nazwisko"><br><br>

  <label for="email">Adres email (obowiązkowe):</label>
  <input type="email" id="email" name="email" required><br><br>

  <label>Preferuję kontakt telefoniczny:</label><br>
  <input type="radio" id="kontakt-tak" name="kontakt" value="tak">
  <label for="kontakt-tak">Tak</label><br>
  <input type="radio" id="kontakt-nie" name="kontakt" value="nie">
  <label for="kontakt-nie">Nie</label><br><br>

  <label for="telefon">Numer telefonu (nieobowiązkowe):</label>
  <input type="tel" id="telefon" name="telefon"><br><br>

  <label for="temat">Temat wiadomości (obowiązkowe):</label>
  <input type="text" id="temat" name="temat" required><br><br>

  <label for="wiadomosc">Wiadomość (obowiązkowe):</label>
  <textarea id="wiadomosc" name="wiadomosc" required></textarea><br><br>

  <label for="zalacznik">Załącznik (nieobowiązkowe):</label>
  <input type="file" id="zalacznik" name="zalacznik"><br><br>

  <input type="submit" value="Wyślij" class="button">
</form>