function enviar() {
    var Nome = document.getElementById("txtnom").value;
    var Sobrenome = document.getElementById("txtsob").value;
    var Email = document.getElementById("txtemail").value;
    var Telefone = parseInt(document.getElementById("txttel").value);
    var NumeroConvidados = parseInt(document.getElementById("txtconv").value);
    var Local = document.getElementById("selec").value;
    if (Nome == "") {
        window.alert("Digite o nome");
        document.getElementById("txtnom").focus();
        return false
    }
    else if (Sobrenome == "") {
        window.alert("Digite o sobrenome");
        var Sobrenome = document.getElementById("txtsob").focus();
        return false
    }
    else if (Email == "") {
        window.alert("Digite o Email");
        document.getElementById("txtemail").focus();
        return false
    }
    else if (Telefone == "") {
        window.alert("Digite o telefone");
        document.getElementById("txttel").focus();
        return false
    }
    else if (isNaN(Telefone)) {
        window.alert("Digite somente números no telefone");
        document.getElementById("txttel").focus();
        return false
    }
    else if (NumeroConvidados < 10) {
        window.alert("Digite mais que 10 convidados");
        document.getElementById("txtconv").focus();
        return false
    }
    else if (isNaN(NumeroConvidados)) {
        window.alert("Digite somente números em convidados");
        document.getElementById("txtconv").focus();
        return false
    }
    else if (isNaN(Telefone)) {
        window.alert("Digite somente números no telefone");
        document.getElementById("txttel").focus();
        return false
    }
    else if (Local == "x") {
        window.alert("Selecione o Local da festa");
        return false
    }
    else {
        window.alert("Orçamento efetuado com Sucesso!")
        return true
    }


}