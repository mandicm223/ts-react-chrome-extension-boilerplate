const button = document.createElement('button')
button.className = 'submit_website'
button.textContent = 'Submit'
document.body.appendChild(button)

// Use it in the following way:
button.style.cssText +=
  '  background-color: #4caf50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;border-radius: 50px;position: fixed;bottom: 100px;right: 20px;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);transition: all 0.2s ease-in-out;'

// const reset_button = document.createElement('button')
// reset_button.className = 'reset_website'
// reset_button.textContent = 'Reset'
// document.body.appendChild(reset_button)

button.addEventListener('click', () => {
  chrome.runtime.sendMessage(
    {
      domainName: 'test domain',
      favicon: 'test favicon',
      url: 'test url',
      timestamp: 'test timestamp',
      command: 'options',
    },
    (response) => {
      for (var key in response.data) {
        var coupon = response.data[key]
      }
    }
  )
})
