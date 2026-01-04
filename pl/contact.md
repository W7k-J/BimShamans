---
layout: page
title: Kontakt
lang: pl
ref: contact
permalink: /pl/contact/
---

<div class="contact-header">
    <h1>Gotowy na Transformację BIM?</h1>
    <p>Omówmy, jak możemy zoptymalizować Twój proces budowlany</p>
</div>

<div class="form-container">
    <div class="success-message" id="successMessage">
        <strong>Dziękujemy!</strong> Twoja wiadomość została wysłana pomyślnie. Odpowiemy wkrótce.
    </div>

    <form class="form-grid" id="contactForm" novalidate action="https://formspree.io/f/xnjnlnzn" method="POST">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="visually-hidden" aria-hidden="true">
        <input type="hidden" name="_subject" value="Formularz kontaktowy">
        <input type="hidden" name="_next" value="https://bimshamans.com/pl/thank-you/">
        <div class="form-group">
            <label for="name" class="form-label">
                Imię i Nazwisko
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-input" 
                placeholder="Anna Nowak"
                required
                autocomplete="name"
            >
        </div>

        <div class="form-group">
            <label for="email" class="form-label">
                Adres Email
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                placeholder="anna.nowak@twojafirma.pl"
                required
                autocomplete="email"
            >
        </div>

        <div class="form-group">
            <label for="subject" class="form-label">
                Temat
            </label>
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                class="form-input" 
                placeholder="Czego dotyczy zapytanie?"
                required
            >
        </div>

        <div class="form-group">
            <label for="message" class="form-label">
                Wiadomość (min. 10 znaków)
            </label>
            <textarea 
                id="message" 
                name="message" 
                class="form-textarea" 
                placeholder="Opisz krótko swój projekt lub pytanie"
                required
                minlength="10"
            ></textarea>
        </div>

        <button type="submit" class="button expand" data-success-text="Wysłano!">
            Wyślij Wiadomość
        </button>

        <div class="privacy-notice">
            <strong>Informacja o prywatności:</strong> Szanujemy Twoją prywatność i nigdy nie udostępnimy Twoich danych osobowych. 
            Twoje dane są wykorzystywane wyłącznie w celu odpowiedzi na zapytanie i doskonalenia naszych usług.
        </div>
    </form>
</div>

<script src="{{ site.baseurl }}/assets/contact-form.js"></script>

