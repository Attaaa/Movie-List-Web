<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MovieW</title>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link href="css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    
    <div class="nav">
        <ul class="nav" id="first-nav">
            <li class="nav-item hamburger">
                <a href="#" class="nav-link text-light d-md-none d-block"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item title">
                <a href="#" class="nav-link text-light d-md-none d-block disable">MOVIEW</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-light d-md-block d-none">HOME</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-light d-md-block d-none">FEATURED</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link text-light d-md-block d-none">CATEGORY</a>
            </li>
            <li class="nav-item ml-auto">
                <a href="#" class="nav-link text-light" id="search-btn-first"><i class="fas fa-search"></i></a>
            </li>
        </ul>
        <div class="search row mx-auto" id="second-nav">
            <div class="col-1 text-right p-0">
                <a id="btn-close-search"><i class="fas fa-times"></i></a>
            </div>
            <div class="col p-0 px-3">
                <input type="text" name="search-movie" id="search-movie" placeholder="search movie...">
            </div>
            <div class="col-1 text-left p-0">
                <a id="btn-search"><i class="fas fa-search"></i></a>
            </div>
        </div>
    </div>

    <div class="main container-fluid p-5">
        <div class="row px-sm-5 px-3" id="movie-list">
        </div>
    </div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/main.js"></script>

</body>
</html>


