function temParam(param){
    return ProcessingInstruction.argv.indexOf(param) !== -1
}


if(temParam('--producao')){
    console.log('atenção total')
}else{
    console.log('Tranquilo!!!')
}