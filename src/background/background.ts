chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'options') {
    chrome.storage.local.get(['data'], function (result) {
      var newData = {
        domainName: msg.domainName,
        favicon: msg.favicon,
        timestamp: msg.timestamp,
        url: msg.url,
      }
      var data = result.data || []
      data.push(newData)
      chrome.storage.local.set({ data: data })
    })
  }

  return true
})
