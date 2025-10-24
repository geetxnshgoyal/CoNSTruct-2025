if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((error) =>
      console.warn('SW register failed', error)
    );
  });
}
