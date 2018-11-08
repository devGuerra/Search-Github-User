$('#btnUser').click(function () {
    let userName = $('#inputUser').val()

    $.getJSON('https://api.github.com/users/' + userName, function (data, status) {
        if (status == 'success') {

            $('#avatarUser').text('')
            $('#nomeUser').text('')
            $('#locationUser').text('')
            $('#bioUser').text('')

            $('#avatarUser').append('<img src=' + data.avatar_url + ' alt="">')
            $('#nomeUser').append('Nome: ' + data.name)
            $('#locationUser').append('Localização: ' + data.location)
            $('#bioUser').append('Bio: ' + data.bio)

        }
    })
})

