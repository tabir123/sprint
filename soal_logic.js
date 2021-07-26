for (y =1 ; y < 10 ; y++){
    for (x = 1; x < 10; x++){
        if (x==y || x == 9 - (y-1) || x == 2  || x == 8 || y == 2  || y == 8 ){
            document.write('*')
        }else{
            document.write('_')
        }
    }
    document.write('<br>')
}