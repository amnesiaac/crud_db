const{ ipcRenderer }= require('electron');

function formFuncionario(){
    var codemp = document.getElementById('codemp').value
    var nome = document.getElementById('nomeFuncionario').value
    var codprof = document.getElementById('codprof').value
    var obj={
        codemp:codemp,
        nome: nome,
        codprof:codprof
    }
    ipcRenderer.send('funcionario',JSON.parse(JSON.stringify(obj)));
}

function attFuncionario(){
    var codemp = document.getElementById('codemp').value
    var nome = document.getElementById('nomeFuncionario').value
    var codprof = document.getElementById('codprof').value
    var obj={
        codemp:codemp,
        nome: nome,
        codprof:codprof
    }
    ipcRenderer.send('attfuncionario',JSON.parse(JSON.stringify(obj)));
}
function formEstado(){
    var codest = document.getElementById('codest').value
    var nome = document.getElementById('nomeEstado').value
    var obj={
        codest:codest,
        nome: nome,
    }
    ipcRenderer.send('estado',JSON.parse(JSON.stringify(obj)));
}
function attEstado(){
    var codest = document.getElementById('codest').value
    var nome = document.getElementById('nomeEstado').value
    var obj={
        codest:codest,
        nome: nome,
    }
    ipcRenderer.send('attestado',JSON.parse(JSON.stringify(obj)));
}
function formCidade(){
    var codcid = document.getElementById('codcid').value
    var nome = document.getElementById('nomeCidade').value
    var codest = document.getElementById('codest').value
    var obj={
        codcid:codcid,
        nome: nome,
        codest:codest
    }
    ipcRenderer.send('cidade',JSON.parse(JSON.stringify(obj)));
}
function attCidade(){
    var codcid = document.getElementById('codcid').value
    var nome = document.getElementById('nomeCidade').value
    var codest = document.getElementById('codest').value
    var obj={
        codcid:codcid,
        nome: nome,
        codest:codest
    }
    ipcRenderer.send('attcidade',JSON.parse(JSON.stringify(obj)));
}
function formProjeto(){
    var codproj = document.getElementById('codproj').value
    var nome = document.getElementById('nomeProjeto').value
    var codempresa = document.getElementById('codempresa').value
    var obj={
        codproj:codproj,
        nome: nome,
        codempresa:codempresa
    }
    ipcRenderer.send('projeto',JSON.parse(JSON.stringify(obj)));
}
function attProjeto(){
    var codproj = document.getElementById('codproj').value
    var nome = document.getElementById('nomeProjeto').value
    var codempresa = document.getElementById('codempresa').value
    var obj={
        codproj:codproj,
        nome: nome,
        codempresa:codempresa
    }
    ipcRenderer.send('attprojeto',JSON.parse(JSON.stringify(obj)));
}
function formAlocacao(){
    var codemp = document.getElementById('codemp').value
    var codproj = document.getElementById('codproj').value
    var qtdhoras = document.getElementById('qtdhoras').value
    var obj={
        codemp:codemp,
        codproj: codproj,
        qtdhoras:qtdhoras
    }
    ipcRenderer.send('alocacao',JSON.parse(JSON.stringify(obj)));
}
function deleteFuncionario(){
    var codemp = document.getElementById('codemp').value
    ipcRenderer.send('deletefuncionario',codemp)
}
function deleteEstado(){
    var codest = document.getElementById('codest').value
    ipcRenderer.send('deleteestado',codest)
}
function deleteCidade(){
    var codcid = document.getElementById('codcid').value
    ipcRenderer.send('deletecidade',codcid)
}
function deleteProjeto(){
    var codproj = document.getElementById('codproj').value
    ipcRenderer.send('deleteprojeto',codproj)
}
function readFuncionario(){
    ipcRenderer.send('readfuncionario')
}
function readEstado(){
    ipcRenderer.send('readestado')
}
function readCidade(){
    ipcRenderer.send('readcidade')
}
function readProjeto(){
    ipcRenderer.send('readprojeto')
}
function readAlocacao(){
    ipcRenderer.send('readalocacao')
}