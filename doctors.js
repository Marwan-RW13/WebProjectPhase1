const searchInput = document.getElementById('searchInput');
const specialtyFilter = document.getElementById('specialtyFilter');
const doctorCards = document.querySelectorAll('.doctors'); // Match the HTML class

if (searchInput && specialtyFilter && doctorCards.length > 0) {
  function filterDoctors() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedSpecialty = specialtyFilter.value;

    doctorCards.forEach(card => {
      const name = card.getAttribute('data-name')?.toLowerCase() || '';
      const specialty = card.getAttribute('data-specialty') || '';

      const matchesSearch = name.includes(searchQuery);
      const matchesSpecialty = selectedSpecialty === 'all' || specialty === selectedSpecialty;

      card.style.display = matchesSearch && matchesSpecialty ? 'block' : 'none';
    });
  }

  searchInput.addEventListener('input', filterDoctors);
  specialtyFilter.addEventListener('change', filterDoctors);
} else {
  console.error("Search input, filter dropdown, or doctor cards are missing");
}
