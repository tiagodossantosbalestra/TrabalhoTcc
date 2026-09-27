```javascript
document.addEventListener('DOMContentLoaded', () => {

    const filmes = {

        // ============================================================
        // POKÉMON
        // ============================================================

        pokemon: {
            titulo: 'Pokémon: O Pesadelo de Darkrai',
            imagem: 'imagem/pokemon1.jpeg',
            plataforma: 'netflix',
            meta: '★ 6.0 · Animação / Aventura / Fantasia · 1h 30m · Netflix',
            sinopse: 'Ash, Dawn e Brock chegam à Cidade de Alamos, onde acontecimentos misteriosos começam a ocorrer. Uma batalha entre os lendários Dialga e Palkia ameaça distorcer o espaço e o tempo. Enquanto os moradores culpam Darkrai pelos pesadelos e pela destruição, Ash descobre que o Pokémon está tentando proteger a cidade e impedir uma catástrofe.',
            ficha: 'Pokémon: O Pesadelo de Darkrai · 2007 · Animação / Aventura / Fantasia'
        },


        // ============================================================
        // MAD MAX
        // ============================================================

        madmax: {
            titulo: 'Mad Max',
            imagem: 'imagem/madmax.jpeg',
            plataforma: 'prime',
            meta: '★ 6.8 · Ação / Ficção Científica · 1h 28m · Prime Video',
            sinopse: 'Em um futuro distópico marcado pelo colapso da sociedade e pela escassez de combustível, o policial Max Rockatansky tenta sobreviver em uma Austrália dominada pela violência e por gangues de estrada. Depois de perder pessoas importantes, Max decide enfrentar seus inimigos e buscar vingança.',
            ficha: 'Mad Max · 1979 · Direção: George Miller'
        },


        // ============================================================
        // GLASS ONION
        // ============================================================

        'glass-onion': {
            titulo: 'Glass Onion: Um Mistério Knives Out',
            imagem: 'imagem/glassonion.jpeg',
            plataforma: 'netflix',
            meta: '★ 7.1 · Mistério / Comédia / Crime · 2h 19m · Netflix',
            sinopse: 'O detetive Benoit Blanc viaja para uma ilha particular na Grécia após receber um convite do bilionário da tecnologia Miles Bron. O encontro reúne um grupo de amigos para um jogo de investigação, mas a brincadeira rapidamente se transforma em um verdadeiro caso de assassinato. Blanc precisa descobrir quem está por trás do crime enquanto todos escondem seus próprios segredos.',
            ficha: 'Glass Onion · 2022 · Direção e roteiro: Rian Johnson · Netflix'
        },


        // ============================================================
        // O PACTO
        // ============================================================

        pacto: {
            titulo: 'O Pacto',
            imagem: 'imagem/pacto.jpeg',
            plataforma: 'prime',
            meta: '★ 7.5 · Ação / Drama / Guerra · 2h 03m · Prime Video',
            sinopse: 'Durante o conflito no Afeganistão, o sargento John Kinley trabalha com o intérprete local Ahmed em uma missão perigosa. Quando a equipe é atacada, Ahmed arrisca a própria vida para salvar Kinley. Depois de retornar aos Estados Unidos, Kinley descobre que Ahmed e sua família continuam escondidos no Afeganistão e decide voltar à zona de guerra para cumprir sua promessa.',
            ficha: 'O Pacto · 2023 · Direção: Guy Ritchie · Prime Video'
        },


        // ============================================================
        // SOUL
        // ============================================================

        soul: {
            titulo: 'Soul',
            imagem: 'imagem/soul.jpeg',
            plataforma: 'disney',
            meta: '★ 8.0 · Animação / Família / Fantasia · 1h 40m · Disney+',
            sinopse: 'Joe Gardner é um professor de música que sonha em se tornar um grande pianista de jazz. Quando finalmente consegue uma oportunidade importante para realizar seu sonho, sofre um acidente e sua alma é transportada para uma dimensão espiritual. Lá, Joe conhece a alma 22 e começa a enxergar a vida de uma maneira diferente.',
            ficha: 'Soul · 2020 · Direção: Pete Docter e Kemp Powers · Pixar / Disney+'
        },


        // ============================================================
        // GUERRA DOS MUNDOS
        // ============================================================

        'guerra-dos-mundos': {
            titulo: 'Guerra dos Mundos',
            imagem: 'https://m.media-amazon.com/images/M/MV5BMjg2YmE1ZDYtMWUzZi00NDgxLTk2M2ItYTVkNzNmN2ZlYWFjXkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 6.6 · Ficção Científica / Ação / Suspense · 1h 57m · Prime Video',
            sinopse: 'Ray Ferrier é um trabalhador divorciado que precisa proteger seus dois filhos quando uma invasão alienígena começa de forma repentina. Gigantescas máquinas de guerra conhecidas como Tripods emergem do solo e começam a destruir cidades. Em meio ao caos, Ray atravessa um país devastado tentando manter seus filhos seguros enquanto a humanidade luta para sobreviver.',
            ficha: 'Guerra dos Mundos · 2005 · Direção: Steven Spielberg · Ficção Científica'
        },


        // ============================================================
        // O RESGATE DO SOLDADO RYAN
        // ============================================================

        'resgate-soldado-ryan': {
            titulo: 'O Resgate do Soldado Ryan',
            imagem: 'https://m.media-amazon.com/images/M/MV5BZWVkYTBlODQtMjFiMi00ODExLWJhMzUtNGY5MDg0MDQwZTM4XkEyXkFqcGc@._V1_.jpg',
            plataforma: 'prime',
            meta: '★ 8.6 · Drama / Guerra / Ação · 2h 49m · Paramount+ / Prime Video',
            sinopse: 'Durante a Segunda Guerra Mundial, logo após o desembarque das tropas aliadas na Normandia no Dia D, o Capitão John Miller recebe a missão de liderar um grupo de soldados através do território inimigo para localizar e resgatar o Soldado James Francis Ryan. Os três irmãos de Ryan foram mortos em combate, e a missão busca levá-lo de volta para casa. Conforme avançam pelas linhas inimigas, os soldados enfrentam batalhas e passam a questionar o enorme sacrifício necessário para salvar apenas um homem.',
            ficha: 'O Resgate do Soldado Ryan · 1998 · Direção: Steven Spielberg'
        },


        // ============================================================
        // O EXTERMINADOR DO FUTURO 2
        // ============================================================

        'terminator-2': {
            titulo: 'O Exterminador do Futuro 2: O Julgamento Final',
            imagem: 'https://www.europanet.com.br/image_gen/resizeimg.php?cod_produto=107657',
            plataforma: 'prime',
            meta: '★ 8.6 · Ação / Ficção Científica / Aventura · 2h 17m · Prime Video',
            sinopse: 'John Connor se tornou o principal alvo de uma nova ameaça enviada do futuro. Um Exterminador T-800 é enviado de volta ao passado para proteger o jovem, enquanto um modelo mais avançado, o T-1000, recebe a missão de eliminá-lo. Sarah Connor, John e o Exterminador precisam trabalhar juntos para impedir o futuro conflito entre humanos e máquinas.',
            ficha: 'O Exterminador do Futuro 2 · 1991 · Direção: James Cameron'
        },


        // ============================================================
        // NARUTO SHIPPUDEN: LAÇOS
        // ============================================================

        'naruto-lacos': {
            titulo: 'Naruto Shippuden: O Filme — Laços',
            imagem: 'https://m.media-amazon.com/images/M/MV5BNTE2ODAyNTkxNl5BMl5BanBnXkFtZTgwNTAzMjA2MDE@._V1_FMjpg_UX1000_.jpg',
            plataforma: 'netflix',
            meta: '★ 6.8 · Anime / Ação / Fantasia · 1h 38m · Streaming variável',
            sinopse: 'A Vila Oculta da Folha é atacada por misteriosos ninjas vindos do País do Céu. Durante o ataque, Naruto conhece Amaru, um jovem aprendiz de médico que procura seu mestre. Naruto decide ajudá-lo e descobre que os acontecimentos estão ligados a uma antiga ameaça. Durante a missão, ele também cruza novamente com Sasuke, formando com ele uma aliança temporária para enfrentar o inimigo.',
            ficha: 'Naruto Shippuden: O Filme — Laços · 2008 · Anime / Ação / Fantasia'
        },


        // ============================================================
        // CÍRCULO DE FOGO
        // ============================================================

        'circulo-de-fogo': {
            titulo: 'Círculo de Fogo',
            imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/220-cartaz.jpg',
            plataforma: 'prime',
            meta: '★ 6.9 · Ação / Ficção Científica / Aventura · 2h 11m · Prime Video',
            sinopse: 'Monstruosas criaturas alienígenas conhecidas como Kaijus surgem de uma fenda no Oceano Pacífico e começam a atacar a humanidade. Para enfrentá-los, os países constroem gigantescos robôs chamados Jaegers, controlados mentalmente por dois pilotos. O ex-piloto Raleigh Becket e a jovem piloto Mako Mori precisam controlar um antigo Jaeger em uma missão desesperada para enfrentar os monstros e impedir a destruição da humanidade.',
            ficha: 'Círculo de Fogo · 2013 · Direção: Guillermo del Toro'
        },


        // ============================================================
        // FILME EXTRA - BRANCA DE NEVE
        // Mantido porque já existia no seu script original.
        // ============================================================

        'branca-de-neve-e-o-cacador': {
            titulo: 'Branca de Neve e o Caçador',
            imagem: 'imagem/branca-de-neve-e-o-cacador.jpeg',
            plataforma: 'netflix',
            meta: '★ 6.1 · Ação / Fantasia / Aventura · 2h 07m · Netflix / Prime Video',
            sinopse: 'A rainha má Ravenna domina o reino e descobre que o coração da princesa Branca de Neve é a chave para sua imortalidade. Quando a jovem foge, um caçador é enviado para capturá-la, mas acaba se tornando seu mentor e aliado em uma guerra para retomar o trono.',
            ficha: 'Branca de Neve e o Caçador · 2012 · Ação / Fantasia / Aventura'
        }
    };


    // ============================================================
    // ELEMENTOS DO MODAL
    // ============================================================

    const modal = document.querySelector('#detalhes-modal');
    const poster = document.querySelector('#modal-poster');
    const titulo = document.querySelector('#modal-titulo');
    const meta = document.querySelector('#modal-meta');
    const sinopse = document.querySelector('#modal-sinopse');
    const ficha = document.querySelector('#modal-ficha');
    const botaoFechar = document.querySelector('.modal-fechar');


    // ============================================================
    // ABRIR MODAL
    // ============================================================

    const abrirModal = filme => {

        const dados = filmes[filme];

        if (!dados) {
            console.error(`Filme não encontrado: ${filme}`);
            return;
        }

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

        document.body.classList.add('modal-aberto');

        if (botaoFechar) {
            botaoFechar.focus();
        }
    };


    // ============================================================
    // FECHAR MODAL
    // ============================================================

    const fecharModal = () => {

        modal.classList.remove('aberto');

        modal.setAttribute('aria-hidden', 'true');

        document.body.classList.remove('modal-aberto');
    };


    // ============================================================
    // BOTÕES "VER MAIS DETALHES"
    // ============================================================

    document.querySelectorAll('[data-filme]').forEach(botao => {

        botao.addEventListener('click', () => {

            const filme = botao.dataset.filme;

            abrirModal(filme);

        });

    });


    // ============================================================
    // ELEMENTOS QUE FECHAM O MODAL
    // ============================================================

    document.querySelectorAll('[data-fechar-modal]').forEach(elemento => {

        elemento.addEventListener('click', fecharModal);

    });


    // ============================================================
    // BOTÃO X
    // ============================================================

    if (botaoFechar) {

        botaoFechar.addEventListener('click', fecharModal);

    }


    // ============================================================
    // TECLA ESC
    // ============================================================

    document.addEventListener('keydown', evento => {

        if (evento.key === 'Escape') {

            fecharModal();

        }

    });


    // ============================================================
    // FILTROS
    // ============================================================

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');


    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filterValue =
                button.getAttribute('data-filter');


            sections.forEach(section => {

                const category =
                    section.getAttribute('data-category');

                const visible =
                    filterValue === 'all' ||
                    filterValue === category;

                section.classList.toggle(
                    'is-visible',
                    visible
                );

                section.classList.toggle(
                    'is-hidden',
                    !visible
                );

            });

        });

    });

});
```
