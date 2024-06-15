
new Array(100)
for(var i = 0; i < 100; i++){
    Array[i] = 0
}
$(() => {

    $('#add').on('click', () => {
        var r = $('#num').val()
        if(r != ""){
            c = parseInt(r)
            if(c < 100 && c >= 0){
                Array[c]++
                $('#ress').empty()
                for(var i = 0; i < 100; i++){
                    if(Array[i] > 0){
                        $('#ress').append(`<div>${i}: ${Array[i]}</div>`)
                    }
                }
                $('#hist').prepend(`<div>${c}</div>`)
            }
        }
        $('#num').val("")
    })

    $('#minus').on('click', () => {
        var r = $('#num').val()
        if(r != ""){
            c = parseInt(r)
            if(c < 100 && c >= 0){
                console.log(c===1)
                console.log(c==='1')
                console.log(Array[c])
                if(Array[c] > 0) Array[c]--
                $('#ress').empty()
                for(var i = 0; i < 100; i++){
                    if(Array[i] > 0){
                        $('#ress').append(`<div>${i}: ${Array[i]}</div>`)
                    }
                }
                $('#hist').prepend(`<div>${-c}</div>`)
            }
        }
        $('#num').val("")
    })
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            var r = $('#num').val()
            if(r != ""){
                c = parseInt(r)
                if(c < 100 && c >= 0){
                    Array[c]++
                    $('#ress').empty()
                    for(var i = 0; i < 100; i++){
                        if(Array[i] > 0){
                            $('#ress').append(`<div>${i}: ${Array[i]}</div>`)
                        }
                    }
                }
            }
            $('#num').val("")
        }
    });
})