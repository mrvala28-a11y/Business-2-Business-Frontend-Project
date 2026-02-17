# MR.VALA - B2B Women Garment Manufacturing Landing Page

## Project Overview
- **Project Name**: MR.VALA Landing Page
- **Type**: B2B Wholesale Garment Manufacturing Website
- **Core Functionality**: Premium animated landing page showcasing manufacturing capabilities, dealer benefits, and CTA for potential B2B clients
- **Target Users**: Business dealers, garment retailers, wholesale buyers

---

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## UI/UX Specification

### Color Palette
```
css
--bg-primary: #0a0a0f (Deep black)
--bg-secondary: #12121a (Dark navy)
--bg-gradient-start: #1a0a2e (Deep purple)
--bg-gradient-end: #0f172a (Navy blue)
--accent-gold: #fbbf24 (Gold)
--accent-electric-blue: #06b6d4 (Electric cyan)
--accent-magenta: #ec4899 (Magenta/Pink)
--accent-purple: #8b5cf6 (Violet)
--text-primary: #ffffff
--text-secondary: #94a3b8 (Slate gray)
--glass-bg: rgba(255, 255, 255, 0.05)
--glass-border: rgba(255, 255, 255, 0.1)
```

### Typography
- **Headings**: "Playfair Display" (elegant, premium) + "Outfit" (modern bold)
- **Body**: "Outfit" (clean, readable)
- **Sizes**:
  - Hero Title: 4rem (64px) desktop, 2.5rem mobile
  - Section Titles: 3rem (48px) desktop, 2rem mobile
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Layout Structure

#### 1. Navigation Bar (Fixed)
- Glassmorphism background with blur
- Logo: "MR.VALA" with gold accent
- Links: Home, About, Process, Benefits, Contact
- CTA Button: "Dealer Login"
- Transparent → Solid on scroll

#### 2. Hero Section (100vh)
- Animated gradient background with floating blobs
- Main headline with typewriter or fade-in animation
- Subtext with staggered animation
- Two CTA buttons with hover effects
- Floating fabric/shape animations
- Particle or gradient wave background

#### 3. Stats Section
- Dark gradient background
- 3 stat cards in a row
- Counter animation from 0 to target
- Glassmorphism cards
- Stats:
  - "10+" Years Experience
  - "50,000+" Monthly Production
  - "200+" Active Dealers

#### 4. Manufacturing Process Section
- Horizontal scroll on mobile, grid on desktop
- 6 process steps with icons
- Each card has:
  - Step number (glowing)
  - Icon
  - Title
  - Description
- Hover: glow effect, scale up
- Steps: Cutting → Stitching → Checking → Press → Packing → Dispatch

#### 5. Designs Preview Section
- Section title with gradient text
- 3D card grid (3 columns desktop, 1 mobile)
- Card features:
  - Image with zoom on hover
  - Glass overlay
  - Title
  - "View Details" button
- Background: subtle animated gradient

#### 6. Dealer Benefits Section
- Section title
- 6 benefit cards grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- Cards:
  1. Custom Design Upload
  2. Partial Delivery Option
  3. Live Order Tracking
  4. Full Order History
  5. WhatsApp Notifications
  6. Dealer Specific Pricing
- Animation: Staggered fade-up on scroll
- Each card: icon, title, description, glassmorphism style

#### 7. CTA Section
- Full-width gradient background
- Animated light streak effect
- Large heading
- Glowing gradient button
- Subtext with contact info

#### 8. Footer
- Dark background
- 4 columns: About, Quick Links, Contact, Social
- WhatsApp icon with glow
- Social icons with hover effects
- Copyright text
- Minimal and clean design

---

## Animation Specifications

### Page Load
- Staggered fade-in for hero elements (0.1s delay between items)
- Logo slide down
- Navbar fade in

### Scroll Animations
- Stats counter: animate from 0 when in view
- Process cards: slide up with stagger
- Benefits cards: fade up with stagger
- Sections: fade in on scroll

### Hover Effects
- Buttons: scale(1.05), glow effect
- Cards: scale(1.02), shadow increase
- Icons: rotate or bounce
- Images: zoom effect

### Background Animations
- Floating gradient blobs (slow movement)
- Gradient wave (subtle)
- Particle effect (optional)

### Special Effects
- Cursor glow effect (optional)
- Button ripple effect
- Parallax on scroll

---

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Functionality Specification

### Core Features
1. Smooth scroll navigation
2. Animated statistics counter
3. Interactive process cards
4. 3D hover effects on design cards
5. Scroll-triggered animations
6. Mobile-responsive hamburger menu

### User Interactions
- Click nav links → smooth scroll to section
- Hover on cards → animation effects
- Click CTA buttons → placeholder action
- Scroll → trigger animations

### Performance
- Lazy load images
- Optimized animations
- Fast initial load

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Dark gradient background visible
- [ ] Gold/cyan/magenta accents visible
- [ ] Glassmorphism cards render correctly
- [ ] All animations smooth (60fps)
- [ ] Fully responsive on mobile/tablet/desktop

### Functionality Checkpoints
- [ ] Stats animate on scroll
- [ ] All sections render
- [ ] Hover effects work
- [ ] Navigation works
- [ ] No console errors

### Content Checkpoints
- [ ] Hero: "MR.VALA – Your Premium Women Garment Manufacturing Partner"
- [ ] Subtext: "Custom Designs | Bulk Production | On-Time Delivery"
- [ ] CTA Buttons: "Become a Dealer", "Dealer Login"
- [ ] Stats: 10+ Years, 50,000+ Monthly, 200+ Dealers
- [ ] Process: All 6 steps present
- [ ] Benefits: All 6 benefits present

---

## File Structure
```
mr-vala-landing/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Process.jsx
│   │   ├── Designs.jsx
│   │   ├── Benefits.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   └── assets/
