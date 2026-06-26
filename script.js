document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Altera a classe ativa entre os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            sections.forEach(section => {
                const category = section.getAttribute('data-category');
                
                // Filtra as secções com base na escolha
                if (filterValue === 'all' || filterValue === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});