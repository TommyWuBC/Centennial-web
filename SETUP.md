# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable **Firestore Database** (start in test mode for development)
   - Enable **Authentication** → Sign-in method → Email/Password
   - Go to Project Settings → General → Your apps → Web app
   - Copy your Firebase configuration

3. **Create `.env.local` File**
   Create a file named `.env.local` in the root directory with:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_ADMIN_EMAILS=your-email@example.com,teammate@example.com
   NEXT_PUBLIC_GOOGLE_FORM_ID=your_google_form_id
   ```

4. **Get Google Form ID**
   - Open your Google Form
   - Look at the URL: `https://docs.google.com/forms/d/e/[FORM_ID]/viewform`
   - Copy the `FORM_ID` part
   - Paste it in `.env.local` as `NEXT_PUBLIC_GOOGLE_FORM_ID`

5. **Add Canva Images**
   - Place your Canva images in `public/images/` directory
   - Update `app/history/page.tsx` with your image paths:
   ```typescript
   const imagePaths = [
     '/images/history1.jpg',
     '/images/history2.jpg',
     // ... add more
   ];
   ```

6. **Create Admin Users**
   - In Firebase Console → Authentication → Users
   - Add users with the email addresses you specified in `NEXT_PUBLIC_ADMIN_EMAILS`
   - Set passwords for these users

7. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Firestore Indexes

When you first use the "Top" sort option, Firebase will prompt you to create a composite index. Click the link in the error message to create it automatically, or manually create:

- Collection: `ideas`
- Fields: `votes` (Descending), `createdAt` (Descending)

## Firestore Security Rules

For production, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ideas/{ideaId} {
      // Anyone can read
      allow read: if true;
      
      // Anyone can create
      allow create: if request.resource.data.title is string
                    && request.resource.data.content is string
                    && request.resource.data.title.size() <= 80
                    && request.resource.data.content.size() <= 300;
      
      // Only authenticated admins can delete
      allow delete: if request.auth != null
                    && request.auth.token.email in ['admin1@example.com', 'admin2@example.com'];
      
      // Anyone can update (for voting)
      allow update: if true;
    }
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add all environment variables from `.env.local` in Vercel dashboard
4. Deploy!

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
   - Select your Firebase project
   - Public directory: `.next` (or `out` if using static export)
   - Configure as single-page app: No
   - Set up automatic builds: Yes
4. Build: `npm run build`
5. Deploy: `firebase deploy --only hosting`

## Troubleshooting

- **Firebase errors**: Make sure all environment variables are set correctly
- **Form not showing**: Check that `NEXT_PUBLIC_GOOGLE_FORM_ID` is correct
- **Can't delete posts**: Verify your email is in `NEXT_PUBLIC_ADMIN_EMAILS` and you're logged in
- **Images not loading**: Ensure images are in `public/images/` and paths are correct

