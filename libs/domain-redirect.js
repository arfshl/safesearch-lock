// Interface for both chromium and firefox
// So that 1 background.js file can be used for both browsers
const API = typeof browser !== "undefined" ? browser : chrome;

// Dynamic rule ID range for domain redirect rules
const RULE_ID_BASE = 1;
const RULE_ID_END = 100;

// Convert a redirect target domaininto a DNR transform.
// Only the target domain is changed.
// The original path and search query string are preserved.
function parseTarget(target) {
    let url;
    
        url = new URL(target);

    const transform = {
        host: url.hostname
    };
// Parse the target URL and extract the scheme and port if present
    if (url.protocol) {
        transform.scheme = url.protocol.slice(0, -1);
    }

    if (url.port) {
        transform.port = url.port;
    }

    return transform;
}

// Build DNR redirect rules from the extension ruleset.
// Only the target domain is changed.
// The original path and search query string are preserved.
function buildDomainRedirectRules(rules) {
    const dnrRules = [];
    let ruleId = RULE_ID_BASE;
// Iterate through the extension ruleset and create DNR rules for each domain redirect rule
    for (const rule of rules) {
        if (rule.type !== "redirect") {
            continue;
        }
// Skip rules that don't have a valid domains array or target string
        if (!Array.isArray(rule.domains) || !rule.target) {
            continue;
        }
// Parse the target domain into a DNR transform object
        const transform = parseTarget(rule.target);

        if (!transform) {
            continue;
        }
// Add a DNR rule for each domain in the rule's domain list
        for (const domain of rule.domains) {

            dnrRules.push({
                id: ruleId++,
                priority: 100,

                action: {
                    type: "redirect",
                    redirect: {
                        transform
                    }
                },

                condition: {
                    urlFilter: `||${domain}/`,
                    resourceTypes: [
                        "main_frame"
                    ]
                }
            });
        }
    }

    return dnrRules;
}

// Replace the extension's domain redirect rules on update
// in this case 11-20, which is entitled to domain redirect with the new ruleset.
export async function updateDomainRedirectRules(rules) {
    const newRules =
        buildDomainRedirectRules(rules);
// Get the existing dynamic rules from the declarativeNetRequest API
    const existingRules =
        await API.declarativeNetRequest.getDynamicRules();
// Filter the existing rules to find those that are in the domain redirect rule ID range (11-20) and remove them
    const removeRuleIds =
        existingRules
            .filter(
                rule =>
                    rule.id >= RULE_ID_BASE &&
                    rule.id <= RULE_ID_END
            )
            .map(rule => rule.id);
// Update the dynamic rules by removing the old rules and adding the new ones
    await API.declarativeNetRequest.updateDynamicRules({
        removeRuleIds,
        addRules: newRules
    });
}