var rand = (start, end) => {
    var r
    var n = end - start + 1
    r = Math.random() * n
    r = Math.floor(r + 1)
    return r
}

$(() => {

    $('#start').on('click', () => {

        var f = $('#f_n').val()
        var l = $('#l_n').val()
        var c = $('#c_n').val()
        var arr = []
        var str = ''
        var s = ''

        if((l-f+1)>=c && l >= f){
            for (i = 1; i <= c; i++) {
                s = rand(f, l)
                var b = 1
                for(j=0;j<arr.length;j++){
                    if(arr[j]==s){
                        i--
                        arr.splice(j,1);
                        b = 0
                    }
                }
                if(b){
                    str += s
                    str += ' '
                }
                arr.push(s);
            }
        }

        $('#op').val(str)
    })
})