
new Array(100)

$(() => {

    $('#add').on('click', () => {
        var c = $('#num').val()
        if(!isNaN(c) && c < 100){
            Array[c]++
            $('#ress').val("數字列表")
            for(var i = 0; i < 100; i++){
                if(Array[i] > 0){
                    var D = document.createElement('div')
                    D.innerHTML = i + ": " + Array[i]
                    $('#ress').appendChild(D)
                }
            }
        }
    })
})