# HALODEK Chat UI - React Native (Expo)

This Expo project reproduces the HALODEK chat UI with separate screens for Chat, Status and Calls.

## Features
- Header with title and icons
- Tab bar that navigates to separate screens (Chat, Status, Calls)
- Chat list with avatars, messages, timestamps and unread badges
- Floating action button (tappable)
- Reusable components (ChatItem, TabBar, FloatingButton)
- Expo-managed project (easy to run)

## Run locally
1. Install dependencies
```
cd halodek-chat-ui
npm install
```

2. Start Expo
```
npx expo start
```

3. To view on web (Edge) install web deps if prompted:
```
npx expo install react-native-web@~0.18.10 @expo/webpack-config@^18.0.1
```
Then press `w` to open in browser.

4. Or open in Expo Go on your phone by scanning the QR code.

## Notes
- This is a UI-focused front-end; buttons show alerts by default. 
- You can extend the FloatingButton to open modals or real screens.
