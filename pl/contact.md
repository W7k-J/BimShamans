---
layout: page
title: Kontakt
lang: pl
ref: contact
permalink: /pl/contact/
---

# Formularz Kontaktowy

<form action="https://formspree.io/f/xanlqpop" method="POST" class="contact-form" novalidate>
  <!-- Opcjonalny temat wiadomości -->
  <input type="hidden" name="_subject" value="Formularz kontaktowy - Strona">
  <!-- Honeypot anty-spam -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <div class="form-group">
    <label for="imie">Imię (obowiązkowe):</label>
    <input type="text" id="imie" name="imie" required autocomplete="given-name">
  </div>

  <div class="form-group">
    <label for="nazwisko">Nazwisko (nieobowiązkowe):</label>
    <input type="text" id="nazwisko" name="nazwisko" autocomplete="family-name">
  </div>

  <div class="form-group">
    <label for="email">Adres email (obowiązkowe):</label>
    <input type="email" id="email" name="email" required autocomplete="email">
  </div>

  <fieldset class="form-group">
    <legend>Preferuję kontakt telefoniczny:</legend>
    <div class="radio-group">
      <input type="radio" id="kontakt-tak" name="kontakt_preferencja" value="tak">
      <label for="kontakt-tak">Tak</label>
      <input type="radio" id="kontakt-nie" name="kontakt_preferencja" value="nie">
      <label for="kontakt-nie">Nie</label>
    </div>
  </fieldset>

  <div class="form-group">
    <label for="telefon">Numer telefonu (nieobowiązkowe):</label>
    <input type="tel" id="telefon" name="telefon" autocomplete="tel">
  </div>

  <div class="form-group">
    <label for="temat">Temat wiadomości (obowiązkowe):</label>
    <input type="text" id="temat" name="temat" required>
  </div>

  <div class="form-group">
    <label for="wiadomosc">Wiadomość (obowiązkowe):</label>
    <textarea id="wiadomosc" name="message" required rows="6"></textarea>
  </div>

  <!-- Załącznik (usuń jeśli nie używasz / plan Free może blokować) -->
  <div class="form-group">
    <label for="zalacznik">Załącznik (nieobowiązkowe):</label>
    <input type="file" id="zalacznik" name="zalacznik">
  </div>

  <div class="form-group">
    <button type="submit" class="button">Wyślij</button>
  </div>
</form>

<!-- Prosta obsługa komunikatu po wysłaniu (opcjonalne) -->
<script>
document.addEventListener('submit', async (e) => {
  if(e.target.matches('.contact-form')) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      form.reset();
      alert('Dziękujemy! Wiadomość wysłana.');
    } else {
      alert('Wystąpił błąd. Spróbuj ponownie.');
    }
  }
});
</script>
