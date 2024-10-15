// Function to remove elements with class 'cu-container' and 'qGXjvb'
function removeAds() {
    // Remove 'cu-container' ads
    const cuContainers = document.querySelectorAll('div.cu-container');
    cuContainers.forEach(container => {
        const closestAdContainer = container.closest('div.c3mZkd');
        if (closestAdContainer) {
            closestAdContainer.style.display = 'none';
        } else {
            container.style.display = 'none';
        }
    });

    // Remove 'qGXjvb' ads
    const qGXjvbAds = document.querySelectorAll('div.qGXjvb');
    qGXjvbAds.forEach(ad => {
        const closestAdContainer = ad.closest('div.c3mZkd');
        if (closestAdContainer) {
            closestAdContainer.style.display = 'none';
        } else {
            ad.style.display = 'none';
        }
    });
}

// Check if the ad blocker is enabled before running
chrome.storage.sync.get('adBlockerEnabled', function (data) {
    if (data.adBlockerEnabled) {
        // Run the ad removal function if enabled
        window.addEventListener('load', removeAds);
        setInterval(removeAds, 2000);  // Check for dynamically loaded ads
    }
});
