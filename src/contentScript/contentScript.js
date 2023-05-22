const button = document.createElement('button')
button.className = 'submit_website'
button.textContent = 'Submit'
document.body.appendChild(button)

// Use it in the following way:
button.style.cssText +=
  '  background-color: #4caf50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;border-radius: 50px;position: fixed;bottom: 100px;right: 20px;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);transition: all 0.2s ease-in-out;'

var domain = window.location.hostname

button.addEventListener('click', () => {
  chrome.runtime.sendMessage(
    {
      domain: domain,
      url: domain + URL,
      favicon: 'test123',
      command: 'post',
    },
    (response) => {
      console.log(response)
    }
  )
})
