// Detect if user is in an in-app browser (Instagram, Facebook, etc.)
export const isInAppBrowser = (): boolean => {
    const ua = navigator.userAgent || navigator.vendor;

    // Check for Instagram in-app browser
    const isInstagram = ua.includes('Instagram');

    // Check for Facebook in-app browser
    const isFacebook = ua.includes('FBAN') || ua.includes('FBAV');

    // Check for other common in-app browsers
    const isTwitter = ua.includes('Twitter');
    const isLinkedIn = ua.includes('LinkedInApp');

    return isInstagram || isFacebook || isTwitter || isLinkedIn;
};

// Get the current URL to redirect to
export const getCurrentUrl = (): string => {
    return window.location.href;
};

// Attempt to open in external browser
export const openInExternalBrowser = (): void => {
    const url = getCurrentUrl();

    // Try different methods to open in external browser

    // Method 1: Use intent URL for Android
    if (/android/i.test(navigator.userAgent)) {
        window.location.href = `intent://${url.replace(/https?:\/\//, '')}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
        return;
    }

    // Method 2: Show instructions for iOS/Instagram
    // This will be handled by the UI component
};
