# componentes

Criando Web components com javascript, criando e utilizando Shadow DOM.
O código CardNews cria uma classe "CardNews"

customElements.define('card-news', CardNews)
Cria um elemento customizado e define que é utilizado com o apelido/seletor('card-news') e diz qual o molde utilizamos(classe).

Primeiramente utilizamos o método constructor, em seguida chamamos o super que invoca o metodo construtor de quem estamos herdando. Também utilizamos outros métodos como o build e o styles.
O método build será responsável por construir os elementos e o método styles será responsável por aplicar a estilização sem a necessidade de um arquivo css.

Dentro do método build temos:
    Cria um elemento div na nossa shadow DOM:
        const componentRoot = document.createElement("div");
    Cria e adiciona uma propriedade e seu valor, no caso do exemplo a propriedade "class" e o valor atribuido é o "card":
        componentRoot.setAttribute("class","card");
