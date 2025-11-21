# MyCryptoUI - React Native UI Challenge

This project implements the Crypto Exchange UI (design inspired by Bogdan Nikitin — Dribbble) as required for the React Native UI Challenge.

## How to run (development)
1. Install dependencies:
   ```bash
   npm install
Start Expo:

bash
Copy code
npx expo start
Open on device using Expo Go (scan QR) or run on Android emulator (a) / iOS simulator (i on macOS).

Project structure
app/index.tsx - Main Exchange screen

app/components/CurrencyCard.tsx - Reusable Currency card component

app/components/IconPlaceholder.tsx - Small icon box component

Notes
UI is responsive and uses Dimensions to adjust large numbers for small screens.

All repeating code is componentized so it’s easy to reuse.

No external icon libraries required — placeholders are used. 

Author
Thabiso Magagula.