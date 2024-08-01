document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('preRegistrationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch('/pre-registration', {
      method: 'POST',
      body: formData,
      headers: {
        'X-CSRF-TOKEN': formData.get('_token')
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.message);
      alert('Préinscription réussie!');
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Erreur lors de la préinscription.');
    });
  });
});
