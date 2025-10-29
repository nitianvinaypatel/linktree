import { useState, useEffect } from 'react';
import { isInAppBrowser, getCurrentUrl, openInExternalBrowser } from '../utils/browserDetect';

export const ExternalBrowserPrompt = () => {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // Check if user is in an in-app browser
        if (isInAppBrowser()) {
            setShowPrompt(true);
        }
    }, []);

    if (!showPrompt) return null;

    const handleOpenExternal = () => {
        openInExternalBrowser();
    };

    const handleCopyLink = () => {
        const url = getCurrentUrl();
        navigator.clipboard.writeText(url);
        alert('Link copied! Paste it in your browser (Safari, Chrome, etc.)');
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 rounded-3xl p-6 max-w-md w-full shadow-2xl animate-slide-up">
                <div className="text-center mb-6">
                    <div className="text-5xl mb-4">🌐</div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Open in Chrome
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        For the best experience, please open this page in your default browser (Safari, Chrome, etc.)
                    </p>
                </div>

                <div className="space-y-3">
                    {/* Try to open in external browser */}
                    <button
                        onClick={handleOpenExternal}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                        Open in Browser
                    </button>

                    {/* Copy link option */}
                    {/* <button
                        onClick={handleCopyLink}
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                        Copy Link
                    </button> */}

                    {/* Continue anyway */}
                    {/* <button
                        onClick={() => setShowPrompt(false)}
                        className="w-full text-gray-400 text-sm py-2 hover:text-white transition-colors duration-300"
                    >
                        Continue here anyway
                    </button> */}
                </div>

                {/* Instructions */}
                {/* <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs text-gray-400 leading-relaxed">
                        <strong className="text-white">How to open:</strong><br />
                        Tap the three dots (•••) at the top right → Select "Open in Browser" or "Open in Safari/Chrome"
                    </p>
                </div> */}
            </div>
        </div>
    );
};
