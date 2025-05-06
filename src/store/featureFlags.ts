import { create } from 'zustand';

interface FeatureFlags {
  enableVocabularyML: boolean;
  enableTranslation: boolean;
  setEnableVocabularyML: (enabled: boolean) => void;
  setEnableTranslation: (enabled: boolean) => void;
}

export const useFeatureFlags = create<FeatureFlags>((set) => ({
  enableVocabularyML: process.env.NODE_ENV === 'development',
  enableTranslation: true,
  setEnableVocabularyML: (enabled) => set({ enableVocabularyML: enabled }),
  setEnableTranslation: (enabled) => set({ enableTranslation: enabled })
})); 