
new Array(100)

$(() => {

    $('#add').on('click', () => {
        var c = $('#num').val()
        console.log(c)

        $('#ress').val(c)
    })
})