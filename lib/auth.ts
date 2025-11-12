import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { auth } from './firebase';

// Check if the logged-in user is an admin
export const isAdmin = (user: User | null): boolean => {
  if (!user || !user.email) return false;
  const adminEmailsStr = process.env.NEXT_PUBLIC_ADMIN_EMAILS || '';
  const adminEmails = adminEmailsStr.split(',').map(email => email.trim());
  return adminEmails.includes(user.email);
};

// Optional: still keep this if you ever use Email/Password for backup
export const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

// 👇 Add this new Google Sign-In version
export const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Google login error:', error);
    return null;
  }
};

// Logout remains the same
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
  }
};
