process.stdout.write('está gostando do curso ?')
process.stdin.on('data', function(data){
    process.stdout.write(`sua resposta foi ${data} Obrigado`)
    process.exit()
})