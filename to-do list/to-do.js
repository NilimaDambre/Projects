$( document ).ready(function(){
    $('#input').change(function(){
        var input = $(this).val();
        $('#ul').append('<li>' + input + '<i class="fa fa-check" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i> </li>');
        $(this).val('')
    });
    $('#ul').on('click','.fa-trash',function(){
        console.log("hello");
        $(this).parent('li').fadeOut(500);
    });
    $('#ul').on('click','.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });
});