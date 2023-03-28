function carregaDicionario() {
    var biografias = {
        "bio 1": {
            nome: "Amelia Earhart",
            imagem: "img/ameliaearhart.jpg",
            descricao: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao: "As mulheres devem tentar fazes as coisas que os homens tentaram. Quando falhamos, o erro deve ser um desafio para outras."
        },

        "bio 2": {
            nome: "Bertha Von Suttner",
            imagem: "img/bertha.jpg",
            descricao: "A austro-húngara Bertha Von Suttner foi a primeira mulher a ganhar o Prêmio Nobel da Paz, em 1905. Inclusive, ela foi uma das responsáveis pela criação do prêmio, pois ajudou o amigo Alfred Nobel na idealização da homenagem, ocorrida pela primeira vez em 1901. Bertha dedicou sua vida à escrita e a pacificação. Seu romance Abaixo às armas, de 1889, se tornou conhecido como um manifesto antimilitarista, pois expõe a violência das guerras sob o ponto de vista de uma mulher.",
            citacao: "Depois do verbo amar, ajudar é o verbo mais lindo do mundo."
        },

        "bio 3": {
            nome: "Leila Diniz",
            imagem: "img/leiladiniz.jpg",
            descricao: "Em plena ditadura militar, Leila Diniz foi uma grande defensora da emancipação feminina e do amor livre. Além disso, foi pioneira ao usar bíquini na praia durante sua gravidez, abrindo um caminho para que esse tabu fosse desmistificado. O fato de Leila fazer parte das mulheres que marcaram história não é por acaso. Considerada uma das maiores musas da televisão brasileira, ela era a que mais quebrava o tabu na hora de falar sobre sexo. A brasileira morreu com 27 anos em um acidente aéreo, quando voltava de uma viagem à Austrália",
            citacao: "Sempre andei sozinha. Me dou bem comigo mesma"
        },

        "bio 4": {
            nome: "Malala Yousafzai",
            imagem: "img/malala.jpg",
            descricao: "Malala Yousafzai também está na nossa lista de mulheres importantes na história. Se por um lado Marie Curie foi a primeira pessoa a ser contemplada com dois Prêmios Nobel, por outro, a paquistanesa foi a mais jovem a recebê-lo — tendo apenas 17 anos na época. O ativismo de Malala começou cedo: com apenas 11 anos de idade ela já escrevia relatos sobre a ocupação talibã. Sem contar que, aos 15 anos, levou três tiros na cabeça por causa de suas ações ativistas. A boa notícia é que, além de sobreviver, Malala segue defendendo o direito ao estudo.",
            citacao: "Houve um tempo em que as mulheres pediam aos homens que lutassem pelos direitos delas. Mas agora, nós lutaremos por nós mesmas!"
        },

        "bio 5": {
            nome: "Maria da Penha",
            imagem: "img/mariadapenha.jpg",
            descricao: "A famosa Lei Maria da Penha, que defende mulheres vítimas de violência doméstica existe no Brasil, existe por causa da luta de uma brasileira de mesmo nome. Depois de quase ser assassinada, em duas tentativas de seu ex-marido, Maria da Penha lutou por 20 anos para que o agressor e o estado fossem punidos. Todo seu esforço não foi em vão, e a lei que leva seu nome entrou em vigor em 2006. Para além dessa conquista, ela passou a coordenar uma ONG que auxilia vítimas de violência doméstica, trabalhando no combate deste problema. Essa brasileira com certeza merece estar entre as mulheres históricas!",
            citacao: "A vida começa quando a violência acaba."
        },

        "bio 6": {
            nome: "Valentina Tereshkova",
            imagem: "img/valentina.jpg",
            descricao: "Valentina Tereshkova, a primeira astronauta que foi ao espaço. A russa se destacou entre as demais profissionais por ser uma excelente paraquedista, que era uma habilidade essencial para o voo com a nave Vostok VI. Como resultado de seus feitos como astronauta, ela recebeu duas das maiores condecorações nacionais, o Herói da União Soviética e a Ordem de Lenin. Alguns anos após isso, Valentina ingressou na vida política.",
            citacao: "Um pássaro não pode voar com uma asa só. O vôo espacial humano não pode se desenvolver mais sem a participação ativa das mulheres."
        },

    };

    var content = document.getElementById("content");
    
    for (var bio in biografias) {

        content.innerHTML +=
        '<div class="card">' +
        '<img src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        "<summary>" +
        biografias[bio].nome +
        "</summary>" +
        "<p>" +
        biografias[bio].descricao +
        "</p>" +
        "<blockquote><q>" +
        biografias[bio].citacao +
        "</q></blockquote>" +
        "</details></div>";

    }
}

carregaDicionario();

