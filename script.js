```javascript
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       DADOS DOS FILMES
    ========================================================= */

    const filmes = {

        pokemon: {
            titulo: 'Pokémon: O Pesadelo de Darkrai',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsDN4Ekd3KD4oKQIaDqIkBh1BDoFBBKEF2mgvCWkVvA&s=10',
            plataforma: 'netflix',
            meta: '★ 6.0 · Animação / Aventura · 1h 30m · Netflix',
            sinopse: 'Ash, Dawn e Brock chegam à Cidade Alamos, onde acontecimentos misteriosos ameaçam a população. A batalha entre os lendários Dialga e Palkia provoca uma distorção no espaço e no tempo, enquanto o Pokémon Darkrai é injustamente acusado pelos problemas que acontecem na cidade.',
            ficha: 'Filme de animação da franquia Pokémon · 2007'
        },

        madmax: {
            titulo: 'Mad Max',
            imagem: 'imagem/madmax.jpeg',
            plataforma: 'prime',
            meta: '★ 6.8 · Ação / Ficção científica · 1h 28m · Prime Video',
            sinopse: 'Em um futuro distópico, a sociedade entrou em colapso e a violência domina as estradas. O policial Max Rockatansky perde sua família para uma gangue violenta e passa a buscar vingança em um mundo dominado pelo caos.',
            ficha: 'Direção: George Miller · 1979 · Prime Video'
        },

        'glass-onion': {
            titulo: 'Glass Onion: Um Mistério Knives Out',
            imagem: 'imagem/glassonion.jpeg',
            plataforma: 'netflix',
            meta: '★ 7.1 · Mistério / Comédia · 2h 19m · Netflix',
            sinopse: 'O detetive Benoit Blanc viaja até uma ilha particular na Grécia após receber um convite para participar de um misterioso jogo organizado pelo bilionário Miles Bron. Quando um assassinato acontece, todos os convidados passam a ser suspeitos.',
            ficha: 'Direção e roteiro: Rian Johnson · 2022 · Netflix Original'
        },

        pacto: {
            titulo: "O Pacto (Guy Ritchie's The Covenant)",
            imagem: 'imagem/pacto.jpeg',
            plataforma: 'prime',
            meta: '★ 7.5 · Ação / Drama / Guerra · 2h 03m · Prime Video',
            sinopse: 'Durante a guerra no Afeganistão, o sargento John Kinley sobrevive a uma emboscada graças à ajuda do intérprete local Ahmed. Depois de retornar aos Estados Unidos, Kinley descobre que Ahmed e sua família ainda estão em perigo e decide voltar ao Afeganistão para ajudá-los.',
            ficha: 'Direção: Guy Ritchie · 2023 · Prime Video'
        },

        soul: {
            titulo: 'Soul',
            imagem: 'imagem/soul.jpeg',
            plataforma: 'disney',
            meta: '★ 8.0 · Animação / Família / Fantasia · 1h 40m · Disney+',
            sinopse: 'Joe Gardner é um professor de música que sonha em se tornar um grande músico de jazz. Quando finalmente consegue uma oportunidade importante, sofre um acidente e sua alma vai parar em um mundo espiritual, onde começa a refletir sobre o verdadeiro significado da vida.',
            ficha: 'Direção: Pete Docter e Kemp Powers · Pixar · 2020'
        },

        'guerra-dos-mundos': {
            titulo: 'Guerra dos Mundos',
            imagem: 'https://m.media-amazon.com/images/M/MV5BMjg2YmE1ZDYtMWUzZi00NDgxLTk2M2ItYTVkNzNmN2ZlYWFjXkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 6.5 · Ficção científica / Ação / Drama · 1h 56m · Prime Video',
            sinopse: 'Ray Ferrier é um homem divorciado que tenta se aproximar dos seus dois filhos. Tudo muda quando uma invasão alienígena começa e enormes máquinas de guerra conhecidas como Tripods surgem da terra. Em meio ao caos, Ray precisa proteger seus filhos e encontrar um caminho para sobreviver.',
            ficha: 'Direção: Steven Spielberg · 2005 · Prime Video'
        },

        'resgate-soldado-ryan': {
            titulo: 'O Resgate do Soldado Ryan',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZWVkYTBlODQtMjFiMi00ODExLWJhMzUtNGY5MDg0MDQwZTM4XkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 8.6 · Guerra / Drama · 2h 49m · Prime Video',
            sinopse: 'Durante a Segunda Guerra Mundial, após o desembarque na Normandia no Dia D, o Capitão John Miller recebe a missão de liderar um grupo de soldados pelas linhas inimigas para localizar e resgatar o Soldado James Ryan.',
            ficha: 'Direção: Steven Spielberg · 1998 · Prime Video'
        },

        'filme-3': {
            titulo: 'Filme do pôster',
            imagem: 'https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107657',
            plataforma: 'prime',
            meta: '★ 7.7 · Drama / Guerra · 1h 34m · Prime Video',
            sinopse: 'Este filme corresponde ao pôster fornecido no código original. Os dados específicos podem ser ajustados posteriormente caso o título correto seja identificado.',
            ficha: 'Informações do filme pendentes de identificação'
        },

        'naruto-lacos': {
            titulo: 'Naruto Shippuden: O Filme — Laços',
            imagem: 'https://m.media-amazon.com/images/M/MV5BNTE2ODAyNTkxNl5BMl5BanBnXkFtZTgwNTAzMjA2MDE@._V1_FMjpg_UX1000_.jpg',
            plataforma: 'max',
            meta: '★ 6.2 · Animação / Ação / Aventura · 1h 35m · Max',
            sinopse: 'A Vila da Folha é atacada por misteriosos ninjas do País do Céu. Durante o conflito, Naruto conhece Amaru, um jovem aprendiz de médico, e descobre que o ataque está ligado a uma ameaça muito maior. Em meio à batalha, Naruto acaba cruzando novamente o caminho de Sasuke.',
            ficha: 'Filme da franquia Naruto Shippuden · 2008 · Max'
        },

        'circulo-de-fogo': {
            titulo: 'Círculo de Fogo',
            imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/220-cartaz.jpg',
            plataforma: 'max',
            meta: '★ 6.9 · Ação / Ficção científica · 2h 11m · Max',
            sinopse: 'Monstruosas criaturas alienígenas chamadas Kaijus surgem de uma fenda no fundo do oceano e começam a atacar as cidades do planeta. Para combatê-las, a humanidade cria enormes robôs chamados Jaegers, controlados por dois pilotos conectados mentalmente.',
            ficha: 'Direção: Guillermo del Toro · 2013 · Max'
        }

    };


    /* =========================================================
       MODAL
    ========================================================= */

    const modal = document.querySelector('#detalhes-modal');

    const modalPoster = document.querySelector('#modal-poster');
    const modalTitulo = document.querySelector('#modal-titulo');
    const modalMeta = document.querySelector('#modal-meta');
    const modalSinopse = document.querySelector('#modal-sinopse');
    const modalFicha = document.querySelector('#modal-ficha');

    const abrirModal = (filme) => {

        const dados = filmes[filme];

        if (!dados) {
            console.error(`Filme "${filme}" não encontrado no script.js.`);
            return;
        }

        if (!modal) {
            console.error('Modal #detalhes-modal não foi encontrado no HTML.');
            return;
        }

        /* Pôster */
        if (modalPoster) {
            modalPoster.src = dados.imagem;
            modalPoster.alt = `Pôster de ${dados.titulo}`;

            modalPoster.onerror = () => {
                console.warn(`Não foi possível carregar a imagem de ${dados.titulo}.`);
            };
        }

        /* Título */
        if (modalTitulo) {
            modalTitulo.textContent = dados.titulo;
        }

        /* Meta */
        if (modalMeta) {
            modalMeta.textContent = dados.meta;
            modalMeta.className = `modal-meta plataforma-${dados.plataforma}`;
        }

        /* Sinopse */
        if (modalSinopse) {
            modalSinopse.textContent = dados.sinopse;
        }

        /* Ficha técnica */
        if (modalFicha) {
            modalFicha.textContent = dados.ficha;
            modalFicha.className = `modal-ficha plataforma-${dados.plataforma}`;
        }

        /* Abre o modal */
        modal.classList.add('aberto');
        modal.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';

        const botaoFechar = document.querySelector('.modal-fechar');

        if (botaoFechar) {
            setTimeout(() => botaoFechar.focus(), 50);
        }
    };


    /* =========================================================
       FECHAR MODAL
    ========================================================= */

    const fecharModal = () => {

        if (!modal) {
            return;
        }

        modal.classList.remove('aberto');
        modal.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';

    };


    /* =========================================================
       BOTÕES "VER MAIS DETALHES"
    ========================================================= */

    document.querySelectorAll('[data-filme]').forEach((botao) => {

        botao.addEventListener('click', () => {

            const filme = botao.getAttribute('data-filme');

            abrirModal(filme);

        });

    });


    /* =========================================================
       BOTÕES PARA FECHAR O MODAL
    ========================================================= */

    document.querySelectorAll('[data-fechar-modal]').forEach((elemento) => {

        elemento.addEventListener('click', fecharModal);

    });


    /* =========================================================
       TECLA ESC
    ========================================================= */

    document.addEventListener('keydown', (evento) => {

        if (evento.key === 'Escape') {
            fecharModal();
        }

    });


    /* =========================================================
       FILTROS
    ========================================================= */

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');

    filterButtons.forEach((button) => {

        button.addEventListener('click', () => {

            filterButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            sections.forEach((section) => {

                const category = section.getAttribute('data-category');

                const visible =
                    filterValue === 'all' ||
                    filterValue === category;

                section.classList.toggle('is-visible', visible);
                section.classList.toggle('is-hidden', !visible);

            });

        });

    });

});
```
