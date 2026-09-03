// Interface for both chromium and firefox
// So that 1 background.js file can be used for both browsers
const API = typeof browser !== "undefined" ? browser : chrome;

// Dynamic rule ID range for URL parameter rules
const RULE_ID_BASE = 101;
const RULE_ID_END = 200;

// Build DNR rules that add or replace URL query parameters
function buildUrlParameterRules(rules) {
    const dnrRules = [];
    let ruleId = RULE_ID_BASE;
// Iterate through the extension ruleset and create DNR rules for each URL parameter rule
    for (const rule of rules) {
        if (rule.type !== "url") {
            continue;
        }
// Skip rules that don't have a valid domains array or params object
        if (!Array.isArray(rule.domains) || !rule.params) {
            continue;
        }
// Convert the rule's params object into an array of key-value pairs
        const params = Object.entries(rule.params);

        if (params.length === 0) {
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
                        transform: {
                            queryTransform: {
                                addOrReplaceParams: params.map(
                                    ([key, value]) => ({
                                        key,
                                        value: String(value)
                                    })
                                )
                            }
                        }
                    }
                },
// Add a condition to match requests to the specified domain and only for main frame requests
                condition: {
                    requestDomains: [domain],
                    resourceTypes: [
                        "main_frame"
                    ]
                }
            });
        }
    }

    return dnrRules;
}

// Update the dynamic rules for URL parameter modifications based on the extension ruleset
export async function updateUrlParameterRules(rules) {
    const newRules =
        buildUrlParameterRules(rules);
// Get the existing dynamic rules from the browser
    const existingRules =
        await API.declarativeNetRequest.getDynamicRules();
// Filter the existing rules to find those that are in the URL parameter rule ID range (1-10) and remove them
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