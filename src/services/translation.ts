import * as deepl from '@deepl/client';
import axios from 'axios';

interface TranslationCache {
  [key: string]: {
    translation: string;
    timestamp: number;
  };
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export class TranslationService {
  private translator: deepl.Translator;
  private cache: TranslationCache = {};

  constructor(apiKey: string) {
    this.translator = new deepl.Translator(apiKey);
    this.loadCache();
  }

  private loadCache() {
    const cached = localStorage.getItem('translationCache');
    if (cached) {
      this.cache = JSON.parse(cached);
      this.cleanExpiredCache();
    }
  }

  private saveCache() {
    localStorage.setItem('translationCache', JSON.stringify(this.cache));
  }

  private cleanExpiredCache() {
    const now = Date.now();
    Object.keys(this.cache).forEach(key => {
      if (now - this.cache[key].timestamp > CACHE_DURATION) {
        delete this.cache[key];
      }
    });
  }

  async translate(text: string, targetLang: string): Promise<string> {
    const cacheKey = `${text}:${targetLang}`;
    
    if (this.cache[cacheKey] && Date.now() - this.cache[cacheKey].timestamp < CACHE_DURATION) {
      return this.cache[cacheKey].translation;
    }

    try {
      const result = await this.translator.translateText(text, null, targetLang);
      this.cache[cacheKey] = {
        translation: result.text,
        timestamp: Date.now()
      };
      this.saveCache();
      return result.text;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }
        if (error.response?.status === 403) {
          throw new Error('Invalid API key or insufficient permissions.');
        }
      }
      throw new Error('Translation failed. Please try again.');
    }
  }
} 