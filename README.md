# rezadrian.my.id

Personal portfolio of **Ahmad Reza Adrian** — Backend Engineer & Full-Stack Developer based in Malang, Indonesia.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion**
- **next-intl** (EN / ID i18n)
- **next-themes** (dark / light)
- **React Icons**

---

## Features

- Dark / light theme with adaptive primary color per mode
- EN / ID internationalization
- Responsive layout — mobile-first
- Contact form via Telegram Bot API
- Project showcase with category display
- Work experience timeline
- Education section with logos
- Animated hero with rotating role text
- Custom SVG favicon

---

## Getting Started

### 1. Clone

```bash
git clone https://github.com/rezadrian01/portofolio-1.0
cd portofolio-1.0
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file at the root:

```env
# Telegram Bot (for contact form)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Site domain
DOMAIN=https://www.rezadrian.my.id
```

To get your Telegram credentials:
1. Create a bot via [@BotFather](https://t.me/BotFather) and copy the token
2. Send `/start` to your bot, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates` to find your chat ID

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/          → Next.js App Router pages & API routes
common/       → Shared components, constants, types, styles
modules/      → Feature-based page sections
messages/     → i18n translation files (en.json, id.json)
public/       → Static assets (images, CV)
```

---

## License

MIT
