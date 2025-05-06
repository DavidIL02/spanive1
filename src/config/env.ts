export const config = {
  deeplApiKey: import.meta.env.VITE_DEEPL_API_KEY as string,
  enableVocabularyML: import.meta.env.VITE_ENABLE_VOCABULARY_ML === 'true',
  enableTranslation: import.meta.env.VITE_ENABLE_TRANSLATION === 'true'
}; 