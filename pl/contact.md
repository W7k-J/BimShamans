---
layout: page
title: Kontakt
lang: pl
ref: contact
permalink: /pl/contact/
---

# Formularz Kontaktowy

# Formularz Kontaktowy

<form action="/submit-form" method="post" enctype="multipart/form-data" class="contact-form">
  <div class="form-group">
    <label for="imie">Imię (obowiązkowe):</label>
    <input type="text" id="imie" name="imie" required>
  </div>

  <div class="form-group">
    <label for="nazwisko">Nazwisko (nieobowiązkowe):</label>
    <input type="text" id="nazwisko" name="nazwisko">
  </div>

  <div class="form-group">
    <label for="email">Adres email (obowiązkowe):</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label>Preferuję kontakt telefoniczny:</label>
    <div class="radio-group">
      <input type="radio" id="kontakt-tak" name="kontakt" value="tak">
      <label for="kontakt-tak">Tak</label>
      <input type="radio" id="kontakt-nie" name="kontakt" value="nie">
      <label for="kontakt-nie">Nie</label>
    </div>
  </div>

  <div class="form-group">
    <label for="telefon">Numer telefonu (nieobowiązkowe):</label>
    <input type="tel" id="telefon" name="telefon">
  </div>

  <div class="form-group">
    <label for="temat">Temat wiadomości (obowiązkowe):</label>
    <input type="text" id="temat" name="temat" required>
  </div>

  <div class="form-group">
    <label for="wiadomosc">Wiadomość (obowiązkowe):</label>
    <textarea id="wiadomosc" name="wiadomosc" required></textarea>
  </div>

  <div class="form-group">
    <label for="zalacznik">Załącznik (nieobowiązkowe):</label>
    <input type="file" id="zalacznik" name="zalacznik">
  </div>

  <div class="form-group">
    <input type="submit" value="Wyślij" class="button">
  </div>
</form>