function Pontuação (forro, reggae, sertanejo){
    this.forro = forro,
    this.reggae = reggae,
    this.sertanejo = sertanejo,
    this.musicas = function(){
        console.log('Melhores tipos de musicas');
    }
} 
const pontuação = new Pontuação ('forro', 6.9, 9);
console.log(pontuação);