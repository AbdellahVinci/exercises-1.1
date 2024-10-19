interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}
// src/types.ts
export interface TypingText {
  id: number;
  content: string;
  level: 'easy' | 'medium' | 'hard';
}





// Type pour créer un nouveau Film sans l'ID
type NewFilm = Omit<Film, "id">;

// Exportation des types
export type { Film, NewFilm };
