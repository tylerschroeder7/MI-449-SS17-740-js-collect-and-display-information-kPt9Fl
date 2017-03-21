var firstNameInput = document.getElementById('FIRST_NAME')
var lastNameInput = document.getElementById('LAST_NAME')
var descriptionInput = document.getElementById('DESCRIBE_YOURSELF_INFO')
var emailInput = document.getElementById('EMAIL_ADDRESS')
var phoneInput = document.getElementById('PHONE_NUMBER')
var profile = document.getElementById('my-profile')

var updateProfile = function () {
  var firstNameValue = firstNameInput.value
  var lastNameValue = lastNameInput.value
  var descriptionValue = descriptionInput.value
  var emailValue = emailInput.value
  var phoneValue = phoneInput.value
  var profileCode = document.getElementById('profileCode')
  var profileHtml = '<h1>Hi, my name is ' + firstNameValue + ' ' + lastNameValue + '!</h1>' +
      '<p>' + descriptionValue + '</p>' +
      '<p>' +
      'If you\'re interested in a date, you can email me at' + ' ' +
      '<a href="' + 'mailto:' + emailValue + '" target="_blank">' + emailValue + ' ' + '</a>' +
      'or give me a call at' + ' ' +
      '<a href="' + 'tel:' + phoneValue + '" target="_blank">' + phoneValue + '</a>.' +
      '</p>'
  profile.innerHTML = profileHtml

  profileCode.textContent = profileHtml
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
descriptionInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
