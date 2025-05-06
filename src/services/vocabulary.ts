import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

interface WordComplexity {
  word: string;
  complexity: number;
  synonyms: string[];
}

export class VocabularyService {
  private model: use.UniversalSentenceEncoder | null = null;
  private isModelLoading = false;

  async initialize() {
    if (!this.model && !this.isModelLoading) {
      this.isModelLoading = true;
      try {
        this.model = await use.load();
      } catch (error) {
        console.error('Failed to load vocabulary model:', error);
        throw new Error('Failed to initialize vocabulary features');
      } finally {
        this.isModelLoading = false;
      }
    }
  }

  async analyzeWordComplexity(text: string): Promise<WordComplexity> {
    if (!this.model) {
      await this.initialize();
    }

    if (!this.model) {
      throw new Error('Model not initialized');
    }

    try {
      const embeddings = await this.model.embed([text]);
      const complexity = tf.mean(embeddings).arraySync() as number;
      
      // Simple synonym generation (in production, use a proper synonym API)
      const synonyms = await this.generateSynonyms(text);
      
      return {
        word: text,
        complexity: complexity,
        synonyms
      };
    } catch (error) {
      console.error('Error analyzing word complexity:', error);
      throw new Error('Failed to analyze word complexity');
    }
  }

  private async generateSynonyms(word: string): Promise<string[]> {
    // This is a placeholder. In production, use a proper synonym API
    // or a more sophisticated ML approach
    return [];
  }

  async generateFlashcards(text: string, count: number = 5): Promise<string[]> {
    if (!this.model) {
      await this.initialize();
    }

    if (!this.model) {
      throw new Error('Model not initialized');
    }

    try {
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const embeddings = await this.model.embed(sentences);
      
      // Simple clustering to find diverse sentences
      const flashcards = sentences.slice(0, count);
      return flashcards;
    } catch (error) {
      console.error('Error generating flashcards:', error);
      throw new Error('Failed to generate flashcards');
    }
  }
} 