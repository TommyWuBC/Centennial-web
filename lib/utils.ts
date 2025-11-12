import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, updateDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface Idea {
  id: string;
  title: string;
  content: string;
  votes: number;
  voters: string[];
  createdAt: Timestamp;
  userId?: string;
}

export const getIdeas = async (sortBy: 'top' | 'newest' = 'newest'): Promise<Idea[]> => {
  try {
    const ideasRef = collection(db, 'ideas');
    const q = sortBy === 'top' 
      ? query(ideasRef, orderBy('votes', 'desc'), orderBy('createdAt', 'desc'))
      : query(ideasRef, orderBy('createdAt', 'desc'));
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt,
    })) as Idea[];
  } catch (error) {
    console.error('Error fetching ideas:', error);
    return [];
  }
};

export const createIdea = async (title: string, content: string): Promise<string | null> => {
  try {
    const ideasRef = collection(db, 'ideas');
    const docRef = await addDoc(ideasRef, {
      title,
      content,
      votes: 0,
      voters: [],
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating idea:', error);
    return null;
  }
};

export const upvoteIdea = async (ideaId: string, voterId: string): Promise<boolean> => {
  try {
    const ideaRef = doc(db, 'ideas', ideaId);
    const ideaSnap = await getDoc(ideaRef);
    
    if (!ideaSnap.exists()) {
      return false; // Idea doesn't exist
    }
    
    const ideaData = ideaSnap.data();
    if (ideaData.voters && ideaData.voters.includes(voterId)) {
      return false; // Already voted
    }
    
    const currentVotes = ideaData.votes || 0;
    const currentVoters = ideaData.voters || [];
    
    await updateDoc(ideaRef, {
      votes: currentVotes + 1,
      voters: [...currentVoters, voterId],
    });
    return true;
  } catch (error) {
    console.error('Error upvoting idea:', error);
    return false;
  }
};

export const deleteIdea = async (ideaId: string): Promise<boolean> => {
  try {
    const ideaRef = doc(db, 'ideas', ideaId);
    await deleteDoc(ideaRef);
    return true;
  } catch (error) {
    console.error('Error deleting idea:', error);
    return false;
  }
};

export const generateVoterId = (): string => {
  if (typeof window === 'undefined') return '';
  let voterId = localStorage.getItem('voterId');
  if (!voterId) {
    voterId = `voter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('voterId', voterId);
  }
  return voterId;
};

export const hasVoted = (ideaId: string): boolean => {
  if (typeof window === 'undefined') return false;
  const votedIdeas = JSON.parse(localStorage.getItem('votedIdeas') || '[]');
  return votedIdeas.includes(ideaId);
};

export const markAsVoted = (ideaId: string): void => {
  if (typeof window === 'undefined') return;
  const votedIdeas = JSON.parse(localStorage.getItem('votedIdeas') || '[]');
  if (!votedIdeas.includes(ideaId)) {
    votedIdeas.push(ideaId);
    localStorage.setItem('votedIdeas', JSON.stringify(votedIdeas));
  }
};

