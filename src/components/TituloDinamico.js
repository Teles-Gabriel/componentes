class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        //base do componente

        const componentRoot = document.createElement("h1"); //criando tags HTML
        componentRoot.textContent = this.getAttribute("titulo"); //propriedade titulo

        //estilar o componente

        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red; 
            }
        `

        //enviar para a shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico)