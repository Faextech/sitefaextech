export {};

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>,
      options?: {
        eventCallback?: () => void;
        eventTimeout?: number;
      }
    ) => void;
  }
}
