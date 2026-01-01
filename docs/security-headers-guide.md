# Security Headers Configuration

## GitHub Pages Deployment

GitHub Pages nie wspiera bezpośrednio niestandardowych nagłówków HTTP. Jednakże, CSP został dodany jako meta tag w pliku `_includes/meta.html`, co zapewnia podstawową ochronę.

### Ograniczenia GitHub Pages:
- Nie można ustawić custom HTTP headers
- Meta tag CSP działa dla większości przypadków, ale ma pewne ograniczenia
- Nie można użyć `upgrade-insecure-requests` w meta tagu

## Netlify Deployment

Jeśli zdecydujesz się przenieść hosting na Netlify:

1. Plik `_headers` jest już przygotowany i będzie automatycznie użyty
2. Netlify automatycznie rozpoznaje ten plik i aplikuje nagłówki
3. Zawiera pełne nagłówki bezpieczeństwa:
   - Content Security Policy (CSP)
   - X-Frame-Options
   - X-Content-Type-Options
   - X-XSS-Protection
   - Referrer-Policy
   - Permissions-Policy
   - Strict-Transport-Security (HSTS)

## Apache (.htaccess)

Jeśli używasz Apache, dodaj do pliku `.htaccess`:

```apache
<IfModule mod_headers.c>
    # Content Security Policy
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com; font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
    
    # Prevent clickjacking
    Header set X-Frame-Options "DENY"
    
    # Prevent MIME sniffing
    Header set X-Content-Type-Options "nosniff"
    
    # XSS Protection
    Header set X-XSS-Protection "1; mode=block"
    
    # Referrer Policy
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Permissions Policy
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
    
    # HSTS (only if using HTTPS)
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

## Nginx

Jeśli używasz Nginx, dodaj do konfiguracji serwera:

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com; font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" always;

add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

## Cloudflare Workers

Jeśli używasz Cloudflare, możesz dodać nagłówki przez Workers:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newResponse = new Response(response.body, response)
  
  newResponse.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com; font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests")
  newResponse.headers.set('X-Frame-Options', 'DENY')
  newResponse.headers.set('X-Content-Type-Options', 'nosniff')
  newResponse.headers.set('X-XSS-Protection', '1; mode=block')
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newResponse.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()')
  newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  
  return newResponse
}
```

## Testowanie CSP

Po wdrożeniu, przetestuj CSP używając:

1. **Przeglądarki**: Otwórz DevTools → Console i sprawdź czy są błędy CSP
2. **Online tools**:
   - https://csp-evaluator.withgoogle.com/
   - https://securityheaders.com/
3. **Browser extensions**: CSP Evaluator (Chrome)

## Aktualna konfiguracja CSP

Obecna polityka zezwala na:

- **script-src**: własne skrypty + inline scripts + cdnjs.cloudflare.com (html5shiv)
- **style-src**: własne style + inline styles + Google Fonts
- **font-src**: własne fonty + Google Fonts CDN + data URIs
- **img-src**: wszystkie obrazy przez HTTPS + data URIs
- **connect-src**: tylko własna domena (fetch/XHR)
- **frame-ancestors**: blokada iframe (clickjacking protection)
- **base-uri**: tylko własna domena
- **form-action**: tylko własna domena

### Uwaga o 'unsafe-inline'

Obecna konfiguracja używa `'unsafe-inline'` dla scripts i styles ze względu na:
- Inline script do inicjalizacji theme
- Inline styles w niektórych komponentach

**Zalecana poprawa** (dla przyszłości):
1. Przenieś inline scripts do zewnętrznych plików
2. Użyj `nonce` lub `hash` zamiast `'unsafe-inline'`
3. Przykład z nonce:
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="script-src 'self' 'nonce-RANDOM123';">
   <script nonce="RANDOM123">...</script>
   ```

## Security Headers Score

Po wdrożeniu wszystkich nagłówków, strona powinna uzyskać ocenę **A+** na https://securityheaders.com/
