function initialize() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover(); 

    $('a.preventClick').on('click', function (e) { e.preventDefault(); return true; });
    
    //$('a.btn-hiss').on('click', function(e) {  })

    $(".navbar-brand").on("click",function(e){
        $("html, body").animate({scrollTop: 0}, 400);
    });

    $("nav ul li").on("click", "a", function(event) {
        var position = $($(this).attr("href")).offset().top - 70;
        $("html, body").animate({scrollTop: position}, 400);
        $("nav ul li a").parent().removeClass("active");
        $(this).parent().addClass("active");
        event.preventDefault();
    });

    $('#inputRange1Mice').on('change',function(e){
        console.log(e.target.value);
        if(e.target.value == 1) {
            $("#mouseLabel").text("mouse");
            // $("#group-mice-label").text("mouse");
        } else {
            $("#mouseLabel").text("mice");
            // $("#group-mice-label").text("mice");
        }
        // $("#group-total-mice").val(e.target.value);
        $('#totalMice').val(e.target.value);
    });
}