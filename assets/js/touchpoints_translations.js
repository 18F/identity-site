const yesButton = document.querySelector('input[type=submit][value=yes]');
const noButton = document.querySelector('input[type=submit][value=no]');

if (document.documentElement.lang === 'es') {
  if (yesButton) {
    yesButton.value = 'si';
  }
} else if (document.documentElement.lang === 'fr') {
  if (yesButton && noButton) {
    yesButton.value = 'oui';
    noButton.value = 'non';
  }
}