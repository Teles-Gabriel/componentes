class CardNews extends HTMLElement {//se comporta/herda como o elemento html
    constructor(){//primeiro metodo a ser executado
        super();//invoca o metodo construtor de quem vc herda
    
    const shadow = this.attachShadow({ mode: "open"}); //cria uma sombra e anexa uma sombra aberta e o mundo exterior js pode influenciar 
    shadow.innerHTML = "<h1>Hello World</h1>"; //coloca dentro de um html interno o h1
    }
}

customElements.define('card-news', CardNews) //cria elemento customizado e define que é utilizado com o apelido seletor e diz qual o molde(classe)