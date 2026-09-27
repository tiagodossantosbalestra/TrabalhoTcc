document.addEventListener('DOMContentLoaded', () => {

    const filmes = {

        pokemon: {
            titulo: 'Pokémon: O Pesadelo de Darkrai',
            imagem: 'imagem/pokemon1.jpeg',
            plataforma: 'netflix',
            meta: '★ 6.0 · Animação / Aventura · 1h 30m · Netflix',
            sinopse: 'Ash, Dawn e Brock chegam à Cidade Alamos, onde uma série de acontecimentos misteriosos ameaça a população. A batalha entre os lendários Dialga e Palkia provoca uma distorção no espaço e no tempo, enquanto o Pokémon Darkrai é injustamente acusado pelos problemas que acontecem na cidade.',
            ficha: 'Direção: Kunihiko Yuyama · Pokémon · 2007'
        },

        madmax: {
            titulo: 'Mad Max',
            imagem: 'imagem/madmax.jpeg',
            plataforma: 'prime',
            meta: '★ 6.8 · Ação / Ficção científica · 1h 28m · Prime Video',
            sinopse: 'Em um futuro distópico, a sociedade entrou em colapso e a violência domina as estradas. O policial Max Rockatansky perde sua família para uma gangue violenta e passa a buscar vingança em um mundo dominado pelo caos e pela escassez.',
            ficha: 'Direção: George Miller · 1979 · Prime Video'
        },

        'glass-onion': {
            titulo: 'Glass Onion: Um Mistério Knives Out',
            imagem: 'imagem/glassonion.jpeg',
            plataforma: 'netflix',
            meta: '★ 7.1 · Mistério / Comédia · 2h 19m · Netflix',
            sinopse: 'O detetive Benoit Blanc viaja até uma ilha particular na Grécia após receber um convite para participar de um misterioso jogo organizado pelo bilionário Miles Bron. O encontro reúne antigos amigos, mas uma morte transforma a brincadeira em uma investigação real.',
            ficha: 'Direção e roteiro: Rian Johnson · 2022 · Netflix'
        },

        pacto: {
            titulo: "O Pacto (Guy Ritchie's The Covenant)",
            imagem: 'imagem/pacto.jpeg',
            plataforma: 'prime',
            meta: '★ 7.5 · Ação / Drama / Guerra · 2h 03m · Prime Video',
            sinopse: 'Durante a guerra no Afeganistão, o sargento John Kinley sobrevive a uma emboscada graças à ajuda do intérprete local Ahmed. Depois de retornar aos Estados Unidos, Kinley descobre que Ahmed e sua família ainda estão em perigo e decide voltar ao Afeganistão para cumprir sua promessa.',
            ficha: 'Direção: Guy Ritchie · 2023 · Prime Video'
        },

        soul: {
            titulo: 'Soul',
            imagem: 'imagem/soul.jpeg',
            plataforma: 'disney',
            meta: '★ 8.0 · Animação / Família / Fantasia · 1h 40m · Disney+',
            sinopse: 'Joe Gardner é um professor de música que sonha em se tornar um grande músico de jazz. Quando finalmente consegue uma oportunidade importante, sofre um acidente e sua alma vai parar em um mundo espiritual. Lá, ele conhece uma alma chamada 22 e começa a refletir sobre o verdadeiro significado da vida.',
            ficha: 'Direção: Pete Docter e Kemp Powers · Pixar · 2020'
        },

        guerra-dos-mundos: {
            titulo: 'Guerra dos Mundos',
            imagem: 'https://m.media-amazon.com/images/M/MV5BMjg2YmE1ZDYtMWUzZi00NDgxLTk2M2ItYTVkNzNmN2ZlYWFjXkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 6.5 · Ficção científica / Ação / Drama · 1h 56m · Prime Video',
            sinopse: 'Ray Ferrier é um homem divorciado que tenta se aproximar dos seus dois filhos. Tudo muda quando uma invasão alienígena começa e enormes máquinas de guerra conhecidas como Tripods surgem da terra. Em meio ao caos, Ray precisa proteger seus filhos e encontrar um caminho para sobreviver enquanto a humanidade luta contra uma ameaça aparentemente invencível.',
            ficha: 'Direção: Steven Spielberg · 2005 · Tom Cruise'
        },

        'resgate-soldado-ryan': {
            titulo: 'O Resgate do Soldado Ryan',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZWVkYTBlODQtMjFiMi00ODExLWJhMzUtNGY5MDg0MDQwZTM4XkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 8.6 · Guerra / Drama · 2h 49m · Prime Video',
            sinopse: 'Durante a Segunda Guerra Mundial, após o desembarque na Normandia no Dia D, o Capitão John Miller recebe a missão de liderar um grupo de soldados pelas linhas inimigas para localizar e resgatar o Soldado James Ryan. Os três irmãos de Ryan morreram em combate, e o Exército decide levá-lo de volta para casa para poupar sua mãe de mais uma perda.',
            ficha: 'Direção: Steven Spielberg · 1998 · Tom Hanks'
        },

        'filme-3': {
            titulo: 'O Menino do Pijama Listrado',
            imagem: 'https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107657',
            plataforma: 'prime',
            meta: '★ 7.7 · Drama / Guerra · 1h 34m · Prime Video',
            sinopse: 'Durante a Segunda Guerra Mundial, Bruno, um menino de oito anos, muda-se com sua família para uma região próxima a um campo de concentração. Explorando os arredores, ele conhece Shmuel, um garoto judeu que vive do outro lado de uma cerca. A amizade entre os dois cresce apesar das circunstâncias e das barreiras impostas pela guerra.',
            ficha: 'Direção: Mark Herman · 2008 · Drama histórico'
        },

        'naruto-lacos': {
            titulo: 'Naruto Shippuden: O Filme — Laços',
            imagem: 'https://m.media-amazon.com/images/M/MV5BNTE2ODAyNTkxNl5BMl5BanBnXkFtZTgwNTAzMjA2MDE@._V1_FMjpg_UX1000_.jpg',
            plataforma: 'max',
            meta: '★ 6.2 · Animação / Ação / Aventura · 1h 35m · Max',
            sinopse: 'A Vila da Folha é atacada por misteriosos ninjas do País do Céu. Durante o conflito, Naruto conhece Amaru, um jovem aprendiz de médico, e descobre que o ataque está ligado a uma ameaça muito maior. Em meio à batalha, Naruto acaba cruzando novamente o caminho de Sasuke, formando uma aliança inesperada para enfrentar o inimigo.',
            ficha: 'Direção: Hajime Kamegaki · 2008 · Naruto Shippuden'
        },

        'circulo-de-fogo': {
            titulo: 'Círculo de Fogo',
            imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/220-cartaz.jpg',
            plataforma: 'max',
            meta: '★ 6.9 · Ação / Ficção científica · 2h 11m · Max',
            sinopse: 'Monstruosas criaturas alienígenas chamadas Kaijus surgem de uma fenda no fundo do oceano e começam a atacar as cidades do planeta. Para combatê-las, a humanidade cria enormes robôs chamados Jaegers, controlados por dois pilotos conectados mentalmente. Quando a ameaça aumenta, um ex-piloto e uma jovem recruta precisam assumir o controle de um antigo Jaeger em uma última tentativa de salvar a humanidade.',
            ficha: 'Direção: Guillermo del Toro · 2013 · Ficção científica'
        },

        'branca-de-neve-e-o-cacador': {
            titulo: 'Branca de Neve e o Caçador',
            imagem: 'imagem/branca-de-neve-e-o-cacador.jpeg',
            plataforma: 'netflix',
            meta: '★ 6.1 · Ação / Fantasia / Aventura · 2h 07m · Netflix / Prime Video',
            sinopse: 'A rainha má Ravenna domina o reino e descobre que o coração da princesa Branca de Neve é a chave para sua imortalidade. Quando a jovem foge, um caçador é enviado para capturá-la, mas acaba se tornando seu aliado em uma luta para derrotar a rainha e recuperar o reino.',
            ficha: 'Direção: Rupert Sanders · 2012 · Kristen Stewart / Charlize Theron'
        }
    };


    const modal = document.querySelector('#detalhes-modal');


    function abrirModal(idFilme) {

        const dados = filmes[idFilme];

        if (!dados) {
            console.error(`Filme não encontrado: ${idFilme}`);
            return;
        }

        const poster = document.querySelector('#modal-poster');
        const titulo = document.querySelector('#modal-titulo');
        const meta = document.querySelector('#modal-meta');
        const sinopse = document.querySelector('#modal-sinopse');
        const ficha = document.querySelector('#modal-ficha');

        poster.src = dados.imagem;
        poster.alt = `Pôster de ${dados.titulo}`;

        titulo.textContent = dados.titulo;

        meta.textContent = dados.meta;
        meta.className = `modal-meta plataforma-${dados.plataforma}`;

        sinopse.textContent = dados.sinopse;

        ficha.textContent = dados.ficha;
        ficha.className = `modal-ficha plataforma-${dados.plataforma}`;

        modal.classList.add('aberto');
        modal.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';

        const botaoFechar = document.querySelector('.modal-fechar');

        if (botaoFechar) {
            botaoFechar.focus();
        }
    }


    function fecharModal() {

        modal.classList.remove('aberto');
        modal.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';
    }


    /*
     * BOTÕES "VER MAIS DETALHES"
     */

    document.querySelectorAll('.btn-detalhes').forEach(botao => {

        botao.addEventListener('click', function () {

            const idFilme = this.getAttribute('data-filme');

            abrirModal(idFilme);

        });

    });


    /*
     * FECHAR MODAL
     */

    document.querySelectorAll('[data-fechar-modal]').forEach(elemento => {

        elemento.addEventListener('click', fecharModal);

    });


    /*
     * TECLA ESC
     */

    document.addEventListener('keydown', evento => {

        if (evento.key === 'Escape' && modal.classList.contains('aberto')) {
            fecharModal();
        }

    });


    /*
     * FILTROS
     */

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            sections.forEach(section => {

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