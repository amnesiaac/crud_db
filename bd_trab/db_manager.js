const { Pool } = require('pg');

async function db_connect(){
    const db = new Pool({
        connectionString:'postgres://postgres:admin@localhost:5432/lab5'
    });
    return db;
}
async function insertFuncionarios(db,codemp,nome,codprof){
    const dbString = "INSERT INTO empregado(codemp,nome,codprof)VALUES($1,$2,$3)";
    const values = [parseInt(codemp),nome,parseInt(codprof)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function updateFuncionarios(db,codemp,nome,codprof){
    const dbString = "UPDATE empregado SET nome = $1, codprof = $2 WHERE codemp = '"+parseInt(codemp)+"'";
    const values = [nome,parseInt(codprof)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function deleteFuncionario(db,codemp){
    await db.query('DELETE FROM empregado WHERE codemp ='+parseInt(codemp))
}
async function readFuncionario(db){
    var resp = await db.query('SELECT empregado.*,profissao.nome from empregado,profissao WHERE empregado.codprof = profissao.codprof')
    return resp;
}
async function insertCidade(db,codcid,nome,codest){
    const dbString = "INSERT INTO empregado(codcid,nome,codest)VALUES($1,$2,$3)";
    const values = [parseInt(codcid),nome,parseInt(codest)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function updateCidade(db,codcid,nome,codest){
    const dbString = "UPDATE empregado SET nome = $1, codest = $2 WHERE codemp = '"+parseInt(codcid)+"'";
    const values = [nome,parseInt(codest)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function deleteCidade(db,codcid){
    await db.query('DELETE FROM cidade WHERE codemp ='+parseInt(codcid))
}
async function insertEstados(db,codest,nome){
    const dbString = "INSERT INTO empregado(codest,nome)VALUES($1,$2)";
    const values = [parseInt(codest),nome] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function updateEstado(db,codest,nome){
    const dbString = "UPDATE empregado SET nome = $1, WHERE codest = '"+parseInt(codest)+"'";
    const values = [nome] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function deleteEstado(db,codest){
    await db.query('DELETE FROM estado WHERE codemp ='+parseInt(codest))
}
async function insertProjetos(db,codproj,nome,codempresa){
    const dbString = "INSERT INTO empregado(codproj,nome,codempresa)VALUES($1,$2,$3)";
    const values = [parseInt(codproj),nome,parseInt(codempresa)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function updateProjetos(db,codproj,nome,codempresa){
    const dbString = "UPDATE empregado SET nome = $1, codempresa = $2 WHERE codproj = '"+parseInt(codproj)+"'";
    const values = [nome,parseInt(codempresa)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
async function deleteProjeto(db,codproj){
    await db.query('DELETE FROM projeto WHERE codemp ='+parseInt(codproj))
}
async function insertAlocacao(db,codemp,codproj,qtdhoras){
    const dbString = "INSERT INTO empregado(codemp,codproj,qtdhoras)VALUES($1,$2,$3)";
    const values = [parseInt(codemp),codproj,parseInt(qtdhoras)] 
    try {
        await db.query(dbString,values);
      } catch (err) {
        console.log(err.stack)
      }
}
module.exports = {
    db_connect,
    insertAlocacao,
    insertCidade,
    insertEstados,
    insertFuncionarios,
    insertProjetos,
    updateCidade,
    updateEstado,
    updateFuncionarios,
    updateProjetos,
    deleteFuncionario,
    deleteCidade,
    deleteEstado,
    deleteProjeto,
    readFuncionario
  };