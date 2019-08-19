//Main js file

if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service worker registration succeeded:', registration);
    });
  }