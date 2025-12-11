function somme(n){
    if(n>1) {return n+somme(n-1);}
    return 1;
}

console.log(somme(5));