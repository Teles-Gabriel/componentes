class CardNews extends HTMLElement {//se comporta/herda como o elemento html
    constructor(){//primeiro metodo a ser executado
        super();//invoca o metodo construtor de quem vc herda
    
    const shadow = this.attachShadow({ mode: "open"}); //cria uma sombra e anexa uma sombra aberta e o mundo exterior js pode influenciar 
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
}

    build(){//constroi os elementos
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card-left");
        
        const autor = document.createElement("span");
        autor.textContent = "By:" + (this.getAttribute("autor") || "By Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-image.png";
        newsImage.alt = "foto da noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles(){ //aplica os estilos
        const style = document.createElement("style");
        style.textContent = `
        
            .card{
                width: 100%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);  
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }


            .card-left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card-left > span {
                font-weight: 400;
            }

            .card-left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card-left > p {
                color: rgb(70, 70, 70);
            }
        
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);