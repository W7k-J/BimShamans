---
layout: page
title: Contact
lang: en
ref: contact
permalink: /en/contact/
---

<div class="contact-header">
    <h1>Ready to Transform Your BIM Workflow?</h1>
    <p>Let's discuss how we can help optimize your construction process</p>
</div>

<div class="form-container">
    <div class="success-message" id="successMessage">
        <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
    </div>

    <form class="form-grid" id="contactForm" novalidate>
        <div class="form-group">
            <label for="name" class="form-label">
                Full Name <span class="required">*</span>
            </label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-input" 
                placeholder="John Doe"
                required
                autocomplete="name"
            >
        </div>

        <div class="form-group">
            <label for="email" class="form-label">
                Email Address <span class="required">*</span>
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                placeholder="john@company.com"
                required
                autocomplete="email"
            >
        </div>

        <div class="form-group">
            <label for="subject" class="form-label">
                Subject <span class="required">*</span>
            </label>
            <input 
                type="text" 
                id="subject" 
                name="subject" 
                class="form-input" 
                placeholder="What would you like to discuss?"
                required
            >
        </div>

        <div class="form-group">
            <label for="message" class="form-label">
                Message <span class="required">*</span>
            </label>
            <textarea 
                id="message" 
                name="message" 
                class="form-textarea" 
                placeholder="Tell us more about your inquiry..."
                required
                minlength="10"
            ></textarea>
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
