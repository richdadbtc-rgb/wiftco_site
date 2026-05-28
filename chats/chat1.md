# Website UI

_Started 2026-05-27 15:37 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "swiftcom"
Project is currently empty (no files)
Current date is now May 27, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<pasted_text name="Pasted text (256 lines)">
You are a senior UI/UX designer specializing in fintech and super-apps for emerging markets.
Design the complete UI/UX for SwiftCom — a Nigerian super-app that combines
communication (messaging, voice calls, AI assistant) with financial services
(digital wallet, bill payments, eSIM management).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
App name:       SwiftCom
Tagline:        "Connecting people..."
Logo symbol:    Lightning bolt ⚡ inside a rounded square
Primary color:  #5E17EB (electric purple)
Secondary:      #3A0CAA (deep purple)
Accent:         #10B981 (emerald green — for success/money-in)
Danger:         #EF4444 (red — for errors/money-out)
Warning:        #F59E0B (amber)
Background:     #F3F4F6 (light gray for screens), #FFFFFF (cards)
Dark text:      #1A1A2E
Muted text:     #6B7280
Typography:     Outfit (primary), fallback: Inter / SF Pro
Border radius:  14px cards, 12px inputs, 20px+ pills/badges
Shadows:        Soft (0 4px 16px rgba(0,0,0,0.08))
Design style:   Modern fintech — clean, bold, trustworthy.
                Purple-forward. Nigerian cultural warmth.
                High contrast, large touch targets (min 44×44dp).
                Inspired by: Paystack, Cash App, WhatsApp, but elevated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TARGET USERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Nigerian adults aged 18–45
- Mix of Lagos tech-savvy professionals and
  everyday users across tier-2/3 cities
- Use Naira (₦ NGN) exclusively in v1
- Identity verification via NIN and BVN (Nigerian standards)
- Familiar with WhatsApp UX patterns

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREENS TO DESIGN (18 total)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Design every screen below at 390×844px (iPhone 14 Pro size).
Include a status bar, realistic content, and bottom nav where applicable.

── FLOW 1: SPLASH & ONBOARDING ──────────────
1. Splash Screen
   - Full-screen purple gradient background (#5E17EB → #1A1A2E)
   - Centered lightning bolt logo (white, glowing)
   - "SwiftCom" wordmark below
   - "Connecting people..." subtitle in light opacity
   - Animated loading bar at bottom
   - Floating translucent circles for depth

2. Onboarding Slide 1 — "Chat & Call, Anywhere"
   - Hero illustration: two people chatting on phones, purple/lavender palette
   - Progress dots (1 of 3 active)
   - Heading (bold, 24px), subtext (14px gray), Next + Skip buttons

3. Onboarding Slide 2 — "Your Money, Your Control"
   - Hero illustration: wallet, coins, upward graph — green/gold palette
   - Progress dots (2 of 3 active)

4. Onboarding Slide 3 — "Stay Connected with eSIM"
   - Hero illustration: SIM card with signal waves, warm yellow palette
   - Progress dots (3 of 3 active)
   - "Get Started" CTA (no Skip)

── FLOW 2: AUTHENTICATION ───────────────────
5. Sign Up Screen
   - Purple gradient header with "Create Account" title
   - Form: Full Name, Email, Password, Confirm Password
   - Password strength indicator bar
   - Terms checkbox
   - "Create Account" primary button
   - "Already have an account? Sign In" link

6. Email OTP Verification
   - Envelope illustration at top
   - "Verify Your Email" heading
   - Subtitle showing masked email
   - 6 large OTP input boxes (highlight active one in purple)
   - Countdown timer
   - "Resend Code" text link

7. Sign In Screen
   - Purple gradient header with "Welcome Back 👋"
   - Email + Password fields
   - "Forgot Password?" link (right-aligned)
   - "Sign In" primary button
   - Divider: "or continue with"
   - Google sign-in button
   - "Don't have an account? Sign Up" footer

── FLOW 3: KYC VERIFICATION ─────────────────
8. KYC Method Selection
   - "Verify Identity" heading
   - Two large option cards (NIN, BVN) with icons, titles, descriptions, radio buttons
   - Selected card has purple border + light purple fill
   - Security notice ("Your data is encrypted...")
   - Continue CTA

9. NIN / BVN Input Screen
   - Step indicator (e.g. Step 2 of 2)
   - Large numeric input, centered, letter-spaced
   - "Where to find your NIN/BVN" helper box (collapsible)
   - Verify button

10. KYC Success Screen
    - Full-screen centered layout
    - Green animated checkmark circle (80px)
    - "Identity Verified!" heading
    - Confirmation subtext
    - Three unlocked-feature pills (wallet, bills, eSIM)
    - "Go to Dashboard →" button

── FLOW 4: DASHBOARD ────────────────────────
11. Dashboard / Home
    - Purple header with greeting ("Good morning 👋, Chidi")
    - Wallet balance card (glassmorphism on purple, shows ₦ balance)
      with 4 action buttons: Send, Receive, Top Up, More
    - Quick actions grid (2×4): Pay Bills, eSIM, AI Bot, Calls,
      History, Transfer, Airtime, Data
    - "Feed" section preview (2 posts)
    - Bottom nav: Home (active), Messages, Feed, Alerts, Profile

── FLOW 5: SOCIAL FEED ──────────────────────
12. Feed Screen
    - White top bar with "Feed" title + compose button (✏️)
    - Story/avatar row (horizontal scroll, 5–6 users, first is "Your Story")
    - Feed cards with: avatar, name, time, post text, optional image/video
    - Reaction bar (6 emoji reactions on long-press)
    - Comment + Share actions
    - FAB (+) for new post

── FLOW 6: MESSAGING & CALLS ────────────────
13. Messages List
    - Search bar at top
    - Pinned conversation(s) section
    - Conversation rows: avatar (with online dot), name, preview, time, unread badge
    - AI Bot appears as first item with robot icon + purple gradient avatar
    - Bottom nav (Messages tab active)

14. Chat View (1-on-1)
    - Header: back arrow, contact avatar (with online dot), name, online status,
      call icon (📞) and video icon (📹)
    - Chat bubbles: outgoing (purple, right), incoming (white, left, with shadow)
    - Date separator pills
    - Read receipt ticks (✓✓ in purple when read)
    - Input bar: attach icon, text field, emoji picker, send button (purple circle)
    - Swipe-to-reply gesture indicator

15. Voice Call Screen
    - Full-screen dark purple radial gradient
    - Pulsing ring animations behind avatar
    - Large contact avatar (80px circle, semi-transparent white)
    - Contact name (24px bold white)
    - "Voice Call" label + live timer
    - 3×1 control grid: Mute, Speaker, Keypad
    - Large red End Call button at bottom center

── FLOW 7: WALLET & BILLS ───────────────────
16. Wallet Screen
    - Purple header with balance card (shows ₦ amount, SwiftID, Send/Receive buttons)
    - "Quick Transfer" horizontal scroll (recent contacts)
    - Transaction history list with icons, descriptions, dates, color-coded amounts
      (green for credit, red for debit)
    - Filter chips: All, Sent, Received, Bills

17. Pay Bills Screen
    - Purple header showing available balance
    - 2×3 category grid with icons: Airtime, Data, Electricity, Cable TV, Water, Others
    - "Recents" section with last 3 billed items (tap to repeat)
    - Input form on selection: amount, reference/meter number, Confirm button

── FLOW 8: ESIM ─────────────────────────────
18. eSIM Screen
    - Header: "My eSIM" + "+ Add Plan" button
    - Active plan card (purple gradient): plan name, data remaining,
      expiry date, progress bar, ICCID truncated, status badge (● Active)
    - "Available Plans" list with data size, duration, price (₦), Buy button
    - Low data warning banner (amber) when < 500MB

── FLOW 9: AI BOT ───────────────────────────
19. AI Bot Chat (SwiftBot)
    - Header: purple gradient, robot avatar, "SwiftBot AI", "Always available"
    - Welcome message from bot (first time: onboarding cards)
    - Chat bubbles: bot = purple gradient left, user = white right
    - Typing indicator (3 animated dots)
    - Quick reply chips below bot messages (e.g., "Check balance", "Buy eSIM", "Pay bills")
    - Same input bar as chat

── FLOW 10: PROFILE & SETTINGS ─────────────
20. Profile Screen
    - Purple gradient header: avatar (with edit pencil overlay), name,
      SwiftID, KYC badge (✅ Verified / ⚠️ Pending)
    - Settings list sections:
      Section 1: Personal Details, Wallet & Payments, My eSIM, KYC Verification
      Section 2: Security, Notification Settings, Language, Contact Us
      Section 3: Sign Out (red text)
    - Bottom nav (Profile tab active)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT LIBRARY (design these too)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Design a component sheet including:
- Button states: Primary (purple fill), Secondary (outline), Danger (red), Disabled
- Input states: Default, Focused (purple border), Error (red border + message), Success
- Avatar sizes: 32px, 40px, 48px, 64px — with online dot variant
- Badge/pill variants: KYC Verified (green), KYC Pending (amber), Active (green), Inactive (gray)
- Transaction row component (icon, title, subtitle, amount)
- Chat bubble components (incoming, outgoing, with timestamp, with image)
- Bottom navigation bar (5 tabs, active + inactive states)
- OTP input box (default, focused, filled, error)
- Notification item (read, unread, with icon type variants)
- Wallet balance card (glassmorphism)
- eSIM plan card (purple gradient)
- Feed post card (text-only, with image, with video)
- Loading skeleton states for key screens
- Empty states (no messages, no transactions, no feed posts)
- Toast/snackbar: Success, Error, Info

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Mobile-first, thumb-friendly (key actions in bottom 60% of screen)
2. High information density without feeling cluttered
3. Purple is dominant but never overwhelming — white gives it room to breathe
4. Money amounts always in ₦ with comma formatting (e.g. ₦42,500.00)
5. Every screen must have a clear single primary action
6. Use iconography from Iconsax or Heroicons (rounded style)
7. Microinteractions: button press scale (0.97), success ripple, loading shimmer
8. Error states must be specific ("NIN must be 11 digits"), never generic
9. Accessibility: WCAG AA contrast, 16sp minimum body text, 44dp touch targets
10. Respect Nigerian cultural context: use ₦, refer to NIN/BVN, keep language
    friendly and informal ("Oya, let's go!" style optional CTA copy)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERABLE FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For each screen produce:
- Full 390×844px screen design with realistic content (no lorem ipsum)
- Proper status bar (9:41 AM, full signal, full battery)
- Labeled with screen name and flow number
- Annotated with key UX decisions (e.g., "purple border = selected state")

Group output as:
  Frame 1:  Splash + Onboarding (4 screens side by side)
  Frame 2:  Auth Flow (3 screens)
  Frame 3:  KYC Flow (3 screens)
  Frame 4:  Dashboard + Feed (2 screens)
  Frame 5:  Messaging + Calls (3 screens)
  Frame 6:  Wallet + Bills (2 screens)
  Frame 7:  eSIM + Notifications (2 screens)
  Frame 8:  AI Bot + Profile (2 screens)
  Frame 9:  Component Library

Total: 20 screens + 1 component sheet
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

Now I have the starter components. Let me build the design system tokens and shared components first.Now let me build Frame 1 (Splash + Onboarding):

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now wire everything into the main index.html using DesignCanvas:

_[tool: write_file]_

_[tool: done]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: fork_verifier_agent]_

Clean (only a Chrome extension noise and Babel dev warning). Let me fork the verifier for a thorough sweep.I've designed the complete SwiftCom super-app — **20 mobile screens + a full component library**, organized into 9 frames on a pan/zoom design canvas.

**What you'll find:**
- **Frame 1** — Splash (purple gradient + glowing bolt) + 3 onboarding slides (chat, money, eSIM)
- **Frame 2** — Sign up (with password strength), Email OTP (6-box), Sign in (with Google)
- **Frame 3** — KYC method picker (NIN selected/BVN), NIN input with `*346#` helper, success state with unlocked-feature pills
- **Frame 4** — Dashboard with glassmorphism wallet card + 2×4 quick actions + feed preview; full Feed with stories row, posts, and FAB
- **Frame 5** — Messages list (pinned + SwiftBot at top), 1-on-1 chat with embedded ₦ receipt bubble, immersive voice call
- **Frame 6** — Wallet (balance card, quick transfer carousel, filterable transactions), Pay Bills (categorized grid + recents)
- **Frame 7** — eSIM (active plan card + low-data banner + 4 plans), Alerts feed with grouping
- **Frame 8** — SwiftBot AI (onboarding cards + quick replies + typing indicator), Profile (KYC-verified badge + 3-section settings)
- **Frame 9** — Component library: 16 sections covering color, buttons, inputs, avatars, badges, OTP, chat bubbles, tx rows, wallet card, eSIM card, bottom nav, notifications, toasts, empty states, skeletons, typography

**Design system in use:** Outfit font · #5E17EB primary · 14pt card radius · soft shadows · ₦ comma-formatted naira · status bar + dynamic island on every screen · WhatsApp-familiar messaging patterns with fintech polish · Nigerian cultural beats ("Oga SwiftCom, you don pass!", NIN/BVN, Lagos/Abuja contacts).

**Navigation:** Pan with two-finger drag, pinch to zoom, click any screen's label header to open it fullscreen (←/→ between siblings, ↑/↓ between frames, Esc to exit).

## User

Save as standalone HTML: index.html

## Assistant

_[tool: str_replace_edit]_

I'll add the required thumbnail template and run the bundler.

_[tool: super_inline_html]_

_[tool: list_files]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: eval_js]_

_[tool: present_fs_item_for_download]_

All 23 artboards render correctly — the bundler's "not found" warnings were misleading; everything is inlined and working.Your standalone file is ready — single self-contained HTML, works offline. 🎉

## User

Save this design as a PDF: index.html

## Assistant

_[tool: write_file]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: open_for_print]_

Print tab open — auto-fires the print dialog once fonts load. If popups are blocked, [click here to open it](https://045fa3db-ee22-4e04-bd39-14d4d6bf8afb.claudeusercontent.com/v1/design/projects/045fa3db-ee22-4e04-bd39-14d4d6bf8afb/serve/index-print.html?t=366f784dbd9237dd12ff03da7829f419c8942c673fd69c113357b571c55d4070.7572a52b-3cb3-4fd2-b6dc-318ba3c91025.114f1e28-24af-406f-8427-844bad797220.1779899850&direct=1), then **⌘P / Ctrl+P → Save as PDF** (A4 portrait, default margins).

## User

i need the ui for the website

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- site_type: Multi-page marketing site (Home, Features, Pricing, Company, Support)
- pages: Home / Landing, Features (deep dive on Chat, Wallet, eSIM, AI Bot), Pricing / Fees, Business / API, Security & Trust, About / Company, Press / Newsroom, Careers, Help / Support, Blog, Download (app store CTAs)
- audience: Mix — general public first, with merchant CTA
- tone: Match the app — clean fintech, purple-forward, professional
- variations: A few different layouts for each page (compare side by side)
- tweaks: Color palette (purple / darker / lighter), Density (airy vs compact), Body font (Outfit / alt)
- imagery: Show phone mockups from the app I just designed
- viewport: Desktop + tablet + mobile
- ctas: Get early access (email capture)

## User

continnue

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

Picking it back up — building the SwiftCom marketing site. Multi-page on a design canvas, desktop 1440 with tablet + mobile of Home, 2 hero variants, reuses the phone screens we already built.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Let me continue with a tighter version of the remaining pages.

## User

continue

## Assistant

_[tool: read_file]_

All page files are done. Now I'll wire everything into a design canvas with a Tweaks panel (palette / font / density), mutating the shared token object so changes apply live across every page.

_[tool: write_file]_

_[tool: str_replace_edit]_

I need to fix the density implementation — let me make it actually work via content zoom with a matching card background so no gaps show.Now let me verify it loads cleanly and check rendering.

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

Clean. Let me screenshot to verify the canvas renders the pages correctly.

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: done]_

14 cards rendered correctly. Let me surface it to the user and run a verification sweep.

_[tool: fork_verifier_agent]_

The SwiftCom **website** is built — a multi-page marketing site on a design canvas. Verification is running in the background.

**What's there (14 artboards):**
- **Home — 2 full variants** to compare: *A* (centered hero, floating phone cluster, feature-card grid) and *B* (editorial dark hero, giant type, alternating feature rows)
- **Features** deep-dive, **Pricing/Fees** (3 tiers + full fee table + FAQ), **Business/API** (code panels, merchant props), **Security & Trust** (compliance table, bug bounty)
- **About** (story, team, timeline, investors), **Press** (coverage + press kit), **Careers** (open roles)
- **Help Center**, **Blog**, **Download** (email capture + app-store CTAs)
- **Responsive Home** at tablet (834) and mobile (390)

Every page reuses the actual phone screens from your app as mockups, keeps the purple-forward fintech system, leads with the **early-access email capture** CTA, and carries the merchant/business thread throughout.

**Tweaks** (toggle from the toolbar) apply live across all pages: **color palette** (electric / deep indigo / light violet / royal blurple), **density** (airy / cozy / compact), and **body font** (Outfit / Jakarta / Inter).

I'll let you know if the verifier flags anything.

