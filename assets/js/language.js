document.getElementById('language-toggle').addEventListener('change', function() {
  const isChecked = this.checked;
  
  if (isChecked) {
    window.location.href = 'index_en.html';
  } else {
    window.location.href = 'index_es.html';
  }
});