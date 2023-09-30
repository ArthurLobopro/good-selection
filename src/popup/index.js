async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab
}

window.addEventListener("DOMContentLoaded", async () => {
    const currentTab = await getCurrentTab()

    chrome.tabs.sendMessage(currentTab.id, "get-lines-count", (number) => {
        document.getElementById("line-count").innerHTML = Number(number)
    })

    chrome.tabs.sendMessage(currentTab.id, "get-selection-length", number => {
        document.getElementById("char-count").innerHTML = Number(number)
    })
})