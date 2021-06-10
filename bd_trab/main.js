const { app, BrowserWindow, ipcMain, NodeEventEmitter} = require('electron');
const db_manager = require('./db_manager');
function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
    win.loadFile('index.html');
    db_connect();
  }
  var db;
  async function db_connect(){
        db = await db_manager.db_connect();
  }

ipcMain.on('funcionario',(event,arg)=>{
    console.log('funcioario ok')
     db_manager.insertFuncionarios(db,arg.codemp,arg.nome,arg.codprof)
  })
  ipcMain.on('attfuncionario',(event,arg)=>{
    console.log('attfuncioario ok')
     db_manager.updateFuncionarios(db,arg.codemp,arg.nome,arg.codprof)
  })
ipcMain.on('estado',(event,arg)=>{
    console.log('estado ok')
    db_manager.insertEstados(db,arg.codest,arg.nome)
 })
 ipcMain.on('attestado',(event,arg)=>{
    console.log('attestado ok')
    db_manager.updateEstado(db,arg.codest,arg.nome)
 })
ipcMain.on('cidade',(event,arg)=>{
    console.log('cidade ok')
    db_manager.insertCidade(db,arg.codcid,arg.nome,arg.codest)
 })
 ipcMain.on('attcidade',(event,arg)=>{
    console.log('attcidade ok')
    db_manager.updateCidade(db,arg.codcid,arg.nome,arg.codest)
 })
ipcMain.on('projeto',(event,arg)=>{
    console.log('projeto ok')
    db_manager.insertProjetos(db,arg.codproj,arg.nome,arg.codempresa)
 })
 ipcMain.on('attprojeto',(event,arg)=>{
    console.log('attprojeto ok')
    db_manager.updateProjetos(db,arg.codproj,arg.nome,arg.codempresa)
 })
ipcMain.on('alocacao',(event,arg)=>{
    console.log('alocacao ok')
    db_manager.insertAlocacao(db,arg.codemp,arg.codproj,arg.qtdhoras)
 })
ipcMain.on('deletefuncionario',(event,arg)=>{
    console.log('delete funcionario ok');
    db_manager.deleteFuncionario(db,arg)
})
ipcMain.on('deletecidade',(event,arg)=>{
    console.log('delete cidade ok');
    db_manager.deleteCidade(db,arg)
})
ipcMain.on('deleteestado',(event,arg)=>{
    console.log('delete estado ok');
    db_manager.deleteEstado(db,arg)
})
ipcMain.on('deleteprojeto',(event,arg)=>{
    console.log('delete projeto ok');
    db_manager.deleteProjeto(db,arg)
})
ipcMain.on('readfuncionario',(event,arg)=>{
 readFuncionario();
})
ipcMain.on('readcidade',(event,arg)=>{
  readCidade();
 })
 ipcMain.on('readestado',(event,arg)=>{
  readEstado();
 })
 ipcMain.on('readprojeto',(event,arg)=>{
  readProjeto();
 })
 ipcMain.on('readalocacao',(event,arg)=>{
  readAlocacao();
 })
async function readFuncionario(){
var resp = await db_manager.readFuncionario(db)
console.log(resp.rows);
}
async function readCidade(){
  var resp = await db_manager.readCidade(db)
  console.log(resp.rows);
  }
async function readAlocacao(){
  var resp = await db_manager.readAlocacao(db)
  console.log(resp.rows);
  }
async function readEstado(){
    var resp = await db_manager.readEstado(db)
    console.log(resp.rows);
  }
async function readProjeto(){
    var resp = await db_manager.readProjeto(db)
    console.log(resp.rows);
  }
app.whenReady().then(createWindow)
  
app.on('activate', () =>{
    createWindow();

});