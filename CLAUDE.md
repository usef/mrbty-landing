# مربطي (Mrbty) - Landing Page

## What is this?
Landing page for مربطي - First Arabic horse farm management SaaS.
Hosted on GitHub Pages with custom domain.

## Live Site
- **URL:** https://mrbty.com
- **Hosting:** GitHub Pages
- **Domain:** Namecheap (DNS configured)

## Current Status
- ✅ Landing page designed and deployed
- ✅ Bilingual (Arabic + English) with toggle
- ✅ RTL support
- ✅ Favicon (Arabian horse in gold/brown theme)
- ✅ Mobile responsive
- ✅ Email signup form (localStorage demo)
- ✅ Google Analytics (ID: G-NY4H26KYSJ)
- ✅ Privacy policy page (bilingual)
- ✅ OpenGraph image for social sharing
- ✅ WhatsApp contact (+201099763611)
- ✅ Email contact (mrbty.app@gmail.com)
- ✅ Instagram (@mrbty.app)
- ✅ Countdown timer (fixed to March 6, 2026)
- 🔲 Connect form to real backend (Google Sheets)
- 🔲 Add Facebook username (when ready)

## File Structure
```
/
├── index.html              # Main landing page (HTML only)
├── styles.css              # All CSS styles
├── script.js               # All JavaScript
├── privacy.html            # Privacy policy (bilingual)
├── og-image.png            # Social media share image (1200x630)
├── CNAME                   # GitHub Pages custom domain
├── favicon.ico             # Browser tab icon
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png    # iOS home screen
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest        # PWA manifest
└── CLAUDE.md               # This file
```

## Design System

### Colors
```css
--gold: #C9A227;        /* Primary - buttons, accents */
--gold-light: #E8D48A;  /* Highlights */
--gold-dark: #9A7B1A;   /* Hover states */
--brown-dark: #2C1810;  /* Background dark sections */
--brown: #5D4037;       /* Secondary brown */
--cream: #FAF6F0;       /* Light background */
```

### Fonts
```css
--font-arabic-display: 'Amiri', serif;      /* Headings AR */
--font-arabic-body: 'Tajawal', sans-serif;  /* Body AR */
--font-english: 'Cormorant Garamond', serif; /* EN headings */
```

### Logo/Favicon
- Arabian horse head silhouette
- Gold (#C9A227) on brown (#2C1810) background
- Rounded corners (80px radius on 512px)

## Page Sections
1. **Hero** - Logo, tagline, email signup, countdown timer (March 6, 2026)
2. **Features** - 6 feature cards (horses, breeding, health, grooming, competitions, offline)
3. **Benefits** - Why Mrbty? 6 benefits with checkmarks
4. **CTA** - Second email signup
5. **Footer** - Brand, social links (WhatsApp, Instagram, Facebook, Email), privacy link, copyright

## Language Switching
```javascript
// Toggle between AR and EN
body.classList.add('en');     // English mode
body.classList.remove('en');  // Arabic mode (default)

// Content visibility
.ar-content { display: block; }
.en-content { display: none; }
body.en .ar-content { display: none; }
body.en .en-content { display: block; }
```

## Email Signup (Current: Demo)
Currently saves to localStorage. Needs integration with:
- **Option A:** Google Sheets (free, simple)
- **Option B:** Mailchimp (free up to 500)
- **Option C:** ConvertKit (free up to 1000)
- **Option D:** Custom backend API

## Countdown Timer
Fixed launch date: March 6, 2026
```javascript
const launchDate = new Date('2026-03-06T00:00:00');
```

## Current Offer
- 2 weeks free trial - no commitment

## Contact Info
- **WhatsApp:** +201099763611
- **Email:** mrbty.app@gmail.com
- **Instagram:** @mrbty.app (https://instagram.com/mrbty.app)
- **Facebook:** (pending username)

## Deployment (GitHub Pages)

### Update Site
```bash
git add .
git commit -m "Update landing page"
git push
# Changes live in ~1 minute
```

### Namecheap DNS Records
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  USERNAME.github.io.
```

## Pending Tasks

### High Priority
1. Connect email form to Google Sheets
2. Add Facebook username when ready

### Nice to Have
- Add testimonials section (after getting beta users)
- Add pricing preview section
- Blog/content section for SEO
- FAQ section
- Sitemap.xml for SEO

## Google Sheets Integration (How-to)
```javascript
// Replace the form handler with:
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;

    await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ email, date: new Date().toISOString() })
    });

    // Show success message
});
```

## Analytics
Google Analytics 4 is configured with ID: `G-NY4H26KYSJ`
- View dashboard: https://analytics.google.com
- Tracks: visitors, geographic location, device type, traffic sources
