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
- 🔲 Connect form to real backend (Google Sheets / Email service)
- 🔲 Add Google Analytics
- 🔲 Add social media pages

## File Structure
```
/
├── index.html              # Main landing page
├── CNAME                   # GitHub Pages custom domain
├── favicon.ico             # Browser tab icon
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png    # iOS home screen
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest        # PWA manifest
└── README-SETUP.md         # Deployment instructions
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
1. **Hero** - Logo, tagline, email signup, countdown timer
2. **Features** - 6 feature cards (horses, breeding, health, grooming, competitions, offline)
3. **Benefits** - Why Mrbty? 6 benefits with checkmarks
4. **CTA** - Second email signup
5. **Footer** - Brand, social links, copyright

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
Set to 90 days from page load. Update in JS:
```javascript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 90);
```

## Early Access Offer
- First 50 signups: 6 months free
- First 100: 3 months free
- First 200: 1 month free

## Deployment (GitHub Pages)

### Initial Setup
```bash
# 1. Create repo on GitHub
# 2. Upload all files
# 3. Settings → Pages → Source: main branch
# 4. Custom domain: mrbty.com
# 5. Enable HTTPS
```

### Namecheap DNS Records
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  USERNAME.github.io.
```

### Update Site
```bash
# Edit files locally, then:
git add .
git commit -m "Update landing page"
git push
# Changes live in ~1 minute
```

## Pending Tasks

### High Priority
1. Connect email form to Google Sheets or Mailchimp
2. Add Google Analytics tracking
3. Create Instagram page (@mrbty.app)
4. Create WhatsApp Business

### Nice to Have
- Add testimonials section (after getting beta users)
- Add pricing preview section
- Blog/content section for SEO
- FAQ section

## Google Sheets Integration (How-to)
```javascript
// Replace the form handler with:
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    
    await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email, date: new Date().toISOString() })
    });
    
    // Show success message
});
```

## Google Analytics Integration
Add before closing </head>:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Current Task
Choose one:
- [ ] Integrate email signup with Google Sheets
- [ ] Add Google Analytics
- [ ] Create social media pages
- [ ] Add new section to landing page