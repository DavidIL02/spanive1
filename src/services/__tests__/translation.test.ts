import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TranslationService } from '../translation';

describe('TranslationService', () => {
  const mockApiKey = 'test-api-key';
  let service: TranslationService;

  beforeEach(() => {
    localStorage.clear();
    service = new TranslationService(mockApiKey);
  });

  it('should cache translations', async () => {
    const text = 'Hello';
    const targetLang = 'ES';
    const mockTranslation = 'Hola';

    // Mock the translator
    vi.spyOn(service['translator'], 'translateText').mockResolvedValue({
      text: mockTranslation,
      detectedSourceLang: 'EN'
    });

    // First call should hit the API
    const result1 = await service.translate(text, targetLang);
    expect(result1).toBe(mockTranslation);
    expect(service['translator'].translateText).toHaveBeenCalledTimes(1);

    // Second call should use cache
    const result2 = await service.translate(text, targetLang);
    expect(result2).toBe(mockTranslation);
    expect(service['translator'].translateText).toHaveBeenCalledTimes(1);
  });

  it('should handle rate limit errors', async () => {
    const text = 'Hello';
    const targetLang = 'ES';

    vi.spyOn(service['translator'], 'translateText').mockRejectedValue({
      response: { status: 429 }
    });

    await expect(service.translate(text, targetLang)).rejects.toThrow(
      'Rate limit exceeded'
    );
  });

  it('should handle invalid API key errors', async () => {
    const text = 'Hello';
    const targetLang = 'ES';

    vi.spyOn(service['translator'], 'translateText').mockRejectedValue({
      response: { status: 403 }
    });

    await expect(service.translate(text, targetLang)).rejects.toThrow(
      'Invalid API key'
    );
  });
}); 