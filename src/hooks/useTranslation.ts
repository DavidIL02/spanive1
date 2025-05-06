import { useState, useCallback } from 'react';
import { TranslationService } from '../services/translation';

interface UseTranslationResult {
  translate: (text: string, targetLang: string) => Promise<void>;
  translatedText: string | null;
  isLoading: boolean;
  error: string | null;
}

export const useTranslation = (apiKey: string): UseTranslationResult => {
  const [service] = useState(() => new TranslationService(apiKey));
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = useCallback(async (text: string, targetLang: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await service.translate(text, targetLang);
      setTranslatedText(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Translation failed');
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  return {
    translate,
    translatedText,
    isLoading,
    error
  };
}; 