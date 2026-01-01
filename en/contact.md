---
layout: page
title: Contact
lang: en
ref: contact
permalink: /en/contact/
---

# Contact Form

<form action="https://formspree.io/f/xanlqpop" method="POST" class="contact-form" novalidate>
  <!-- Optional message subject -->
  <input type="hidden" name="_subject" value="Contact Form - Website">
  <!-- Honeypot anti-spam -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">

  <div class="form-group">
    <label for="firstname">First Name (required):</label>
    <input type="text" id="firstname" name="firstname" required autocomplete="given-name">
  </div>

  <div class="form-group">
    <label for="lastname">Last Name (optional):</label>
    <input type="text" id="lastname" name="lastname" autocomplete="family-name">
  </div>

  <div class="form-group">
    <label for="email">Email Address (required):</label>
    <input type="email" id="email" name="email" required autocomplete="email">
  </div>

  <fieldset class="form-group">
    <legend>I prefer phone contact:</legend>
    <div class="radio-group">
      <input type="radio" id="contact-yes" name="contact_preference" value="yes">
      <label for="contact-yes">Yes</label>
      <input type="radio" id="contact-no" name="contact_preference" value="no">
      <label for="contact-no">No</label>
    </div>
  </fieldset>

  <div class="form-group">
    <label for="phone">Phone Number (optional):</label>
    <input type="tel" id="phone" name="phone" autocomplete="tel">
  </div>

  <div class="form-group">
    <label for="subject">Subject (required):</label>
    <input type="text" id="subject" name="subject" required>
  </div>

  <div class="form-group">
    <label for="message">Message (required):</label>
    <textarea id="message" name="message" required rows="6"></textarea>
  </div>

  <!-- Attachment (remove if not using / Free plan may block) -->
  <div class="form-group">
    <label for="attachment">Attachment (optional):</label>
    <input type="file" id="attachment" name="attachment">
  </div>

  <div class="form-group">
    <button type="submit" class="button">Send</button>
  </div>
</form>
