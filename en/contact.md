---
layout: page
title: Contact
lang: en
ref: contact
permalink: /en/contact/
---

<div class="contact-header">
    <h1>Have the signs in the sky led you to us?</h1>
    <p>If the article resonated. <br> If questions remain. <br> If you seek a shaman’s counsel. <br> Send a raven - and let the dialogue begin.</p>
</div>

<div class="form-container">
    <div class="success-message" id="successMessage" role="alert" aria-live="polite">
        <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
    </div>

    <form class="form-grid" id="contactForm" novalidate action="https://formspree.io/f/xanlqpop" method="POST" data-lang="en">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="visually-hidden" aria-hidden="true">
        <input type="hidden" name="_subject" value="Contact form submission">
        <input type="hidden" name="_next" value="https://bimshamans.com/en/thank-you/">
        <div class="form-group">
            <label for="name" class="form-label">
                Full Name <span class="required-indicator" aria-label="required">*</span>
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-input" 
                placeholder="Jane Smith"
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
                Email Address <span class="required-indicator" aria-label="required">*</span>
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                placeholder="jane.smith@yourcompany.com"
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
                Subject <span class="required-indicator" aria-label="required">*</span>
            </label>
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                class="form-input" 
                placeholder="What would you like to discuss?"
                required
                aria-required="true"
                aria-describedby="subject-error"
                maxlength="200"
            >
            <div id="subject-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <div class="form-group">
            <label for="message" class="form-label">
                    Message (min. 10 characters) <span class="required-indicator" aria-label="required">*</span>
            </label>
            <textarea 
                id="message" 
                name="message" 
                class="form-textarea" 
                placeholder="Briefly describe your project or question"
                required
                aria-required="true"
                aria-describedby="message-error"
                minlength="10"
                maxlength="5000"
            ></textarea>
            <div id="message-error" class="error-message" role="alert" aria-live="polite"></div>
        </div>

        <button type="submit" class="button expand" data-success-text="Message Sent!">
            Send Message
        </button>

        <div class="privacy-notice">
            <strong>Privacy Notice:</strong> We respect your privacy and will never share your personal information. 
            Your data is used solely to respond to your inquiry and improve our services.
        </div>
    </form>
</div>

<script src="{{ site.baseurl }}/assets/contact-form.js"></script>
