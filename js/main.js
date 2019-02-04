$('#loader-container').hide();

$.ajax({
    url: 'https://www.omdbapi.com',
    type: 'GET',
    dataType: 'json',
    data: {
        'apikey': '73d280cb',
        's': 'avengers'
    },
    beforeSend: function(){
        $('#loader-container').show();
    },
    complete: function(){
        $('#loader-container').hide();
    },
    success: function(result){
        if (result.Response === "True") {
            let movie_list = result.Search;

            $.each(movie_list, function(i,data){
                var score = reqMovieScore(data.imdbID);
                
                $('#movie-list').append(`
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-12 mb-4 p-md-2 p-1 card-fade">
                        <div class="card">
                            <div class="score-container"><span class="center">`+ score +`</span></div>
                            <img src="`+ data.Poster +`" class="card-img-top" alt="Test">
                            <div class="card-body text-center">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <a href="#" class="btn btn-gradient px-5">Detail</a>
                            </div>
                        </div>
                    </div>
                `);
            })
        }
        
    }
});

function reqMovieScore(id){
    var obj;
    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'GET',
        dataType: 'json',
        async: false,
        data: {
            'apikey': '73d280cb',
            'i': id
        },
        success: function(result){
            obj = result;
        }
    })
    var score = getMovieScore(obj);
    return score.substring(0,3);
}

function getMovieScore(result){
    if (result.Response === "True") {
        return result.Ratings[0].Value;
    }
}

$('#search-btn-first').click(function(){
    $('#first-nav').addClass('d-none').removeClass('search-out');
    $('#second-nav').addClass('search-focus');
})

$('#btn-close-search').click(function(){
    $('#second-nav').removeClass('search-focus');
    $('#first-nav').removeClass('d-none').addClass('search-out')
})

$('#btn-search').click(function(){
    var title = $('#search-movie').val();
    $('#movie-list').html('');
    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': '73d280cb',
            's': title
        },
        beforeSend: function(){
            $('#loader-container').show();
        },
        complete: function(){
            $('#loader-container').hide();
        },
        success: function(result){
            if (result.Response === "True") {
                let movie_list = result.Search;
    
                $.each(movie_list, function(i,data){
                    var score = reqMovieScore(data.imdbID);
                
                    $('#movie-list').append(`
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-12 mb-4 p-md-2 p-1 card-fade">
                            <div class="card">
                                <div class="score-container"><span class="center">`+ score +`</span></div>
                                <img src="`+ data.Poster +`" class="card-img-top" alt="Test">
                                <div class="card-body text-center">
                                    <h5 class="card-title">`+ data.Title +`</h5>
                                    <a href="#" class="btn btn-gradient px-5">Detail</a>
                                </div>
                            </div>
                        </div>
                    `);
                })
            }
        }
    });
})

