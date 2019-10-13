$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.content').addClass('white-theme');
    } else {
        $('.content').removeClass('white-theme');
    }
})