# Centennial Olympic Park Community Feedback Website

A community engagement website for Centennial Olympic Park in Atlanta, built for English 1101.

## Features

- **Home Page**: Embedded Google Form for visitor feedback
- **History Page**: Scrollable display of park history and significance
- **Ideas Page**: Reddit-style community board for sharing and voting on improvement ideas

## Tech Stack

- Next.js 14
- React 18
- Firebase (Firestore + Authentication)
- Tailwind CSS
- TypeScript

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Enable Authentication (Email/Password)
   - Copy your Firebase config values

3. Create `.env.local` file (use `.env.local.example` as template):
   - Add your Firebase configuration
   - Add admin email addresses
   - Add your Google Form ID

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## Project Structure

```
├── app/              # Next.js app directory
│   ├── page.tsx      # Home page (Google Form)
│   ├── history/      # History page
│   └── ideas/        # Ideas page
├── components/       # React components
├── lib/             # Firebase config and utilities
└── public/          # Static assets (Canva images go here)
```

## Notes

- This is a student project for ENGL1101
- Not affiliated with the City of Atlanta
- Canva images should be placed in the `public/images/` directory

