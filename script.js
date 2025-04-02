document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
   
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })



    //Exibir botão e ocultar botão

const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoAcessibilidade.addEventListener('click', () => {
    opcoesAcessibilidade.classList.toggle('apresenta-lista');//coloca essa classe no html utilizando javascript para exibir botão
    opcoesAcessibilidade.classList.toggle('rotacao-botao');//coloca essa classe no html utilizando javascript para exibir botão

});

})



