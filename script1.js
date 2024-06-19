document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('pw').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (gender) {
      alert(
        `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender.value}`
      );
    } else {
      alert(
        `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nGender: Not selected`
      );
    }
  });


const languageSelect = document.getElementById('button1');
const searchInput = document.getElementById('search');
languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;

    
    if (selectedLanguage === 'English') {
        searchInput.placeholder = 'Search for movies...';
    } else if (selectedLanguage === 'हिन्दी') {
        searchInput.placeholder = 'फ़िल्में खोजें...'; 
    }
});
