import { useState, useCallback, useEffect } from 'react';
import { VocabularyService } from '../services/vocabulary';

interface UseVocabularyResult {
  analyzeWord: (text: string) => Promise<void>;
  generateFlashcards: (text: string) => Promise<void>;
  wordComplexity: number | null;
  synonyms: string[];
  flashcards: string[];
  isLoading: boolean;
  error: string | null;
}

export const useVocabulary = (): UseVocabularyResult => {
  const [service] = useState(() => new VocabularyService());
  const [wordComplexity, setWordComplexity] = useState<number | null>(null);
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [flashcards, setFlashcards] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    service.initialize().catch(console.error);
  }, [service]);

  const analyzeWord = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await service.analyzeWordComplexity(text);
      setWordComplexity(result.complexity);
      setSynonyms(result.synonyms);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze word');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  const generateFlashcards = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const cards = await service.generateFlashcards(text);
      setFlashcards(cards);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate flashcards');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  return {
    analyzeWord,
    generateFlashcards,
    wordComplexity,
    synonyms,
    flashcards,
    isLoading,
    error
  };
}; 