/* CÓDIGOS DE VALIDAÇÃO DO FORMULÁRIO  QUESTÃO 5 */
function validar(dados) {
    if(dados.nome.value.length < 3){
        alert("Campo nome precisa ter mais de 3 caracteres.");
        dados.nome.focus();
        dados.nome.value ="";
        dados.nome.placeholder = "!!Campo obrigatório!!";
        return false;
    }
    if(dados.sexo.value == ""){
        alert("Campo sexo precisa ser selecionado");
        dados.sexo.focus();
        return false;
    }
    if(dados.email.value.length < 3 || dados.email.value.indexOf('@') == -1 || dados.email.value.indexOf('.') == -1) {
        alert("Campo email precisa ser válido e com os caracteres '@' '.'")
        dados.email.focus();
        dados.email.value = "";
        dados.email.placeholder ="exemplo@hotmail.com";
        return false;
    }
    if(dados.cep.value.length != 9 || dados.cep.value.indexOf('-') == -1){
        alert("Campo cep precisa ser válido e com o caractere '-'")
        dados.cep.focus();
        dados.cep.value = "";
        dados.cep.placeholder ="00000-000"
        return false;
    }
    if(dados.municipio.value.length < 1){
        alert("Campo município precisa ser preenchido");
        dados.municipio.focus();
        return false;
    }
    if(dados.estado.value == ""){
        alert("Campo estado precisa ser selecionado");
        dados.estado.focus();
        return false;
    }
}