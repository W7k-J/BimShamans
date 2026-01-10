---
layout: page
title: Kontakt
lang: pl
ref: contact
permalink: /pl/contact/
---

<div class="contact-header">
    <h1>Znaki na niebie przywiodły Cię do nas?</h1>
    <p>Artykuł dał do myślenia? Masz pytania?<br>Szukasz porady szamana?<br>Wyślij kruka - niech rozpocznie się dyskusja. </p>
</div>  

<div class="form-container">
    <div class="success-message" id="successMessage" role="alert" aria-live="polite">
        <strong>Dziękujemy!</strong> Twoja wiadomość została wysłana pomyślnie. Odpowiemy wkrótce.
    </div>

    <form class="form-grid" id="contactForm" novalidate action="https://formspree.io/f/xnjnlnzn" method="POST" data-lang="pl">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="visually-hidden" aria-hidden="true">
        <input type="hidden" name="_subject" value="Formularz kontaktowy">
        <input type="hidden" name="_next" value="https://bimshamans.com/pl/thank-you/">
        <div class="form-group">
            <label for="name" class="form-label">
                Imię i Nazwisko <span class="required-indicator" aria-label="wymagane">*</span>
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-input" 
                placeholder="Anna Nowak"
                required
                aria-required="true"
                aria-describedby="name-error"
                autocomplete="name"
                maxlength="100"
            >
            <div id="name-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <div class="form-group">
            <label for="email" class="form-label">
                Adres Email <span class="required-indicator" aria-label="wymagane">*</span>
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                placeholder="anna.nowak@twojafirma.pl"
                required
                aria-required="true"
                aria-describedby="email-error"
                autocomplete="email"
                maxlength="254"
            >
            <div id="email-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <div class="form-group">
            <label for="subject" class="form-label">
                Temat <span class="required-indicator" aria-label="wymagane">*</span>
            </label>
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                class="form-input" 
                placeholder="Co możemy dla Ciebie zrobić?"
                required
                aria-required="true"
                aria-describedby="subject-error"
                maxlength="200"
            >
            <div id="subject-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <div class="form-group">
            <label for="message" class="form-label">
                Wiadomość (min. 10 znaków) <span class="required-indicator" aria-label="wymagane">*</span>
            </label>
            <textarea 
                id="message" 
                name="message" 
                class="form-textarea" 
                placeholder="Opisz krótko swój problem lub pytanie."
                required
                aria-required="true"
                aria-describedby="message-error"
                minlength="10"                maxlength="5000"            ></textarea>
            <div id="message-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <button type="submit" class="button expand" data-success-text="Wysłano!">
            Wyślij kruka
        </button>

        <div class="privacy-notice">
            <strong>Informacja o prywatności:</strong> Szanujemy Twoją prywatność i nigdy nie udostępnimy Twoich danych osobowych. 
            Twoje dane są wykorzystywane wyłącznie w celu odpowiedzi na zapytanie.
        </div>
    </form>
</div>

<script src="{{ site.baseurl }}/assets/contact-form.js"></script>

