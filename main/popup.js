// popup.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("ad-blocker-toggle");
    const statusText = document.getElementById("status");

    // Get the current status from Chrome storage
    chrome.storage.sync.get("adBlockerEnabled", function (data) {
        toggleSwitch.checked = data.adBlockerEnabled || false;
        statusText.textContent = toggleSwitch.checked ? "On" : "Off";
    });

    // Listen for changes to the toggle switch
    toggleSwitch.addEventListener("change", function () {
        const enabled = toggleSwitch.checked;
        chrome.storage.sync.set({ adBlockerEnabled: enabled }, function () {
            statusText.textContent = enabled ? "On" : "Off";

            // Refresh the active tab
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });
});
