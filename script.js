document.addEventListener('DOMContentLoaded', () => {
    const filmes = {
        pokemon: { titulo: 'Pokemon the rise of Darkai', imagem: 'imagem/pokemon1.jpeg', plataforma: 'netflix', meta: '★ 9.0 · Gênero Aqui · Duração · Netflix', sinopse: 'Pokémon: O Pesadelo de Darkrai acompanha Ash, Brock e Dawn em uma jornada pela Cidade Alamos, onde Dialga e Palkia iniciam uma batalha que distorce o tempo e o espaço.', ficha: 'Filme recomendado · Netflix' },
        madmax: { titulo: 'Mad Max', imagem: 'imagem/madmax.jpeg', plataforma: 'prime', meta: '★ 8.8 · Ação · 2h 00m · Prime Video', sinopse: 'Em um futuro pós-apocalíptico, Max se junta a Furiosa em uma fuga perigosa através do deserto, enfrentando um tirano e seu exército.', ficha: 'Direção: George Miller · Prime Video' },
        'glass-onion': { titulo: 'Glass Onion: Um Mistério Knives Out', imagem: 'imagem/glassonion.jpeg', plataforma: 'netflix', meta: '★ 7.7 · Mistério / Comédia · 2h 19m · Netflix', sinopse: 'O detetive Benoit Blanc viaja para a Grécia para desvendar um intrincado quebra-cabeça envolvendo um bilionário da tecnologia e seu grupo de amigos.', ficha: 'Direção e roteiro: Rian Johnson · Netflix Original' },
        pacto: { titulo: "O Pacto (Guy Ritchie's The Covenant)", imagem: 'imagem/pacto.jpeg', plataforma: 'prime', meta: '★ 7.5 · Ação / Drama · 2h 03m · Prime Video', sinopse: 'Durante o conflito no Afeganistão, um intérprete arrisca a própria vida para salvar um sargento norte-americano ferido.', ficha: 'Direção: Guy Ritchie · Prime Video' },
        soul: { titulo: 'Soul', imagem: 'imagem/soul.jpeg', plataforma: 'disney', meta: '★ 8.1 · Animação / Família · 1h 40m · Disney+', sinopse: 'Um pianista de jazz sofre um acidente e sua alma é levada para um centro cósmico onde ele descobre o significado da vida.', ficha: 'Direção: Pete Docter e Kemp Powers · Pixar' },
        placeholder: { titulo: 'Filme a definir', imagem: 'imagem/xxxxxxxx.jpeg', plataforma: 'disney', meta: '★ Nota a definir · Animação / Família · Duração a definir · Plataforma a definir', sinopse: 'A sinopse deste filme ainda precisa ser preenchida.', ficha: 'Informações pendentes' },
        'branca-de-neve-e-o-cacador': { titulo: 'Branca de Neve e o Caçador', imagem: 'imagem/branca-de-neve-e-o-cacador.jpeg', plataforma: 'netflix', meta: '★ 6.1 IMDb · Ação / Fantasia / Aventura · 2h 07m · Netflix / Prime Video', sinopse: 'A rainha má Ravenna domina o reino e descobre que o coração da princesa Branca de Neve é a chave para sua imortalidade. Quando a jovem foge, um caçador é enviado para capturá-la, mas acaba se tornando seu mentor e aliado em uma guerra para retomar o trono.', ficha: 'Filme disponível em Netflix / Prime Video' }
    };
    const modal = document.querySelector('#detalhes-modal');
    const abrirModal = filme => {
        const dados = filmes[filme];
        const poster = document.querySelector('#modal-poster');
        poster.src = dados.imagem;
        poster.alt = `Pôster de ${dados.titulo}`;
        document.querySelector('#modal-titulo').textContent = dados.titulo;
        const meta = document.querySelector('#modal-meta');
        meta.textContent = dados.meta;
        meta.className = `modal-meta plataforma-${dados.plataforma}`;
        document.querySelector('#modal-sinopse').textContent = dados.sinopse;
        const ficha = document.querySelector('#modal-ficha');
        ficha.textContent = dados.ficha;
        ficha.className = `modal-ficha plataforma-${dados.plataforma}`;
        modal.classList.add('aberto');
        modal.setAttribute('aria-hidden', 'false');
        document.querySelector('.modal-fechar').focus();
    };
    const fecharModal = () => { modal.classList.remove('aberto'); modal.setAttribute('aria-hidden', 'true'); };
    document.querySelectorAll('[data-filme]').forEach(botao => botao.addEventListener('click', () => abrirModal(botao.dataset.filme)));
    document.querySelectorAll('[data-fechar-modal]').forEach(elemento => elemento.addEventListener('click', fecharModal));
    document.addEventListener('keydown', evento => { if (evento.key === 'Escape') fecharModal(); });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            sections.forEach(section => {
                const category = section.getAttribute('data-category');
                
                const visible = filterValue === 'all' || filterValue === category;
                section.classList.toggle('is-visible', visible);
                section.classList.toggle('is-hidden', !visible);
            });
        });
    });
});
