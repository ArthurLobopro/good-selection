function getSelectionLinesCount() {
    const selection = window.getSelection().toString()

    if (selection.length === 0) {
        return 0
    }

    return selection.split("\n").length
}

function getSelectionLength() {
    return window.getSelection().toString().length
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "get-lines-count") {
        sendResponse(getSelectionLinesCount())
    }

    if (message === "get-selection-length") {
        sendResponse(getSelectionLength())
    }
})