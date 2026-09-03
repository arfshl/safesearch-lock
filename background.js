// Interface for both chromium and firefox
// So that 1 background.js file can be used for both browsers
const API = typeof browser !== "undefined" ? browser : chrome;

// Import the extension ruleset and the functions to update dynamic rules for URL parameters and domain redirects
import { RULES } from "./ruleset.js";
import { updateUrlParameterRules } from "./libs/url-parameter.js";
import { updateDomainRedirectRules } from "./libs/domain-redirect.js";

// Update dynamic rules for URL parameters and domain redirects based on the extension ruleset
async function updateRules() {
    // 1. URL parameter
    await updateUrlParameterRules(RULES);

    // 2. Domain redirect
    await updateDomainRedirectRules(RULES);
}
// Initialize the extension by updating dynamic rules
async function init() {
    await updateRules();
}

// Update dynamic rules after installation or extension update.
API.runtime.onInstalled.addListener(details => {
    if (
        details.reason !== "install" &&
        details.reason !== "update"
    ) {
        return;
    }

    updateRules().catch(error => {
        console.error(
            "Failed to update SafeSearch Lock rules:",
            error
        );
    });
});
