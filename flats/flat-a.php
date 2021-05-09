<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Title -->
    <title>Lily Builders</title>

    <!-- Favicons -->
    <link rel="shortcut icon" href="../assets//img/favicon.png">
    <link rel="apple-touch-icon" href="../assets//img/favicon_60x60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../assets//img/favicon_76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../assets//img/favicon_120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../assets//img/favicon_152x152.png">

    <!-- CSS Plugins -->
    <link rel="stylesheet" href="../assets//plugins/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../assets//plugins/slick-carousel/slick/slick.css" />
    <link rel="stylesheet" href="../assets//plugins/animate.css/animate.min.css" />
    <link rel="stylesheet" href="../assets//plugins/animsition/dist/css/animsition.min.css" />
    <link rel="stylesheet" href="../assets//plugins/photoswipe/dist/photoswipe.css" />
    <link rel="stylesheet" href="../assets//plugins/photoswipe/dist/default-skin/default-skin.css" />

    <!-- CSS Icons -->
    <link rel="stylesheet" href="../assets//css/themify-icons.css" />
    <link rel="stylesheet" href="../assets//plugins/font-awesome/css/font-awesome.min.css" />

    <!-- CSS Theme -->
    <link id="theme" rel="stylesheet" href="../assets//css/themes/theme-blue.css" />

</head>

<body class="header-horizontal dark-overlay">

    <!-- Body Wrapper -->
    <div id="body-wrapper" class="animsition" data-animsition-overlay="true">

        <!-- Header -->
        <header id="header" class="header-horizontal dark">

            <!-- Module - Navigation Back -->
            <div class="module module-back">
                <a href="../index.php" class="nav-back"><i class="fa fa-angle-left"></i></a>
            </div>

            <!-- Module - Navigation -->
            <nav id="navigation-main" class="module module-nav">
                <ul class="nav nav-main-horizontal">
                    <li><a href="#informations">Informations</a></li>
                    <li><a href="#details">Details &amp; Plan</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#make-offer">Make offer</a></li>
                </ul>
                <div class="selector"></div>
            </nav>

            <!-- Module - Objects -->
            <div class="module module-object" data-toggle="panel-objects">
                <!-- <img class="object-image" src="assets/img/home/thumbnail.jpg" alt=""> -->
                <span id="address-short" class="object-name"></span>
                <span class="object-indicator"><i class="ti ti-menu"></i></span>
            </div>
            
            <!-- Module - Language -->
            <!-- <nav class="module module-language mr-3">
                        <ul class="nav nav-main-horizontal nav-language">
                            <li><a href="#">PL</a></li>
                            <li><a class="active" href="#">EN</a></li>
                        </ul>
                    </nav> -->
            
            <!-- Module - Navigation Toggle -->
            <div class="module module-nav-toggle">
                <a href="#" id="nav-toggle" class="nav-toggle"><span></span><span></span><span></span><span></span></a>
            </div>

        </header>
        <!-- Header / End -->

        <!-- Content -->
        <div id="content">

            <!-- Section / Informations -->
            <section id="informations" class="section section-object bg-dark cover dark">

                <!-- BG Image -->
                <div class="bg-image-holder bg-image-fixed"><img id="landing_img"
                        src="../assets//img/objects/object-large01.jpg" alt=""></div>

                <!-- Content -->
                <div class="container object-single" data-local-scroll>
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <h1 class="mb-0">
                                <span id="flat_name" class="mr-3"></span>
                                <i class="fa fa-check-circle text-success" data-toggle="tooltip" data-placement="top"
                                    title="Best choice!"></i>
                            </h1>
                            <ul class="list-inline lead">
                                <li class="list-inline-item"><span class="text-muted">Total area:</span> <strong
                                        id="area"></strong> </li>
                                <li class="list-inline-item"><span class="text-muted">Number of rooms:</span> <strong
                                        id="rooms"></strong></li>
                            </ul>
                        </div>
                        <div class="col-lg-5 text-lg-right">
                            <span id="price" class="object-price mr-4"></span>
                            <a href="#make-offer" class="btn btn-primary">Make an offer</a>
                        </div>
                    </div>
                </div>

                <!-- Gallery Toggle -->
                <a href="#" class="fullscreen-toggle" data-items="gallerySliderItems" data-toggle="gallery">
                    <span class="arrow-tl"></span>
                    <span class="arrow-tr"></span>
                    <span class="arrow-br"></span>
                    <span class="arrow-bl"></span>
                </a>

            </section>

            <!-- Section / Details -->
            <section id="details" class="section section-details">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 push-lg-1">
                            <h2 class="mb-0">Details &amp; Plan</h2>
                            <hr class="hr-primary">
                            <div class="row lead">
                                <div class="col-md-6">
                                    <dl class="row">
                                        <dt class="col-sm-6">Total area:</dt>
                                        <dd id="details-area" class="col-sm-6"></dd>
                                    </dl>
                                </div>
                                <div class="col-md-6">
                                    <dl class="row">
                                        <dt class="col-sm-6">Bedrooms:</dt>
                                        <dd id="details-bedrooms" class="col-sm-6"></dd>
                                        <dt class="col-sm-6">Bathrooms</dt>
                                        <dd id="details-bathrooms" class="col-sm-6"></dd>
                                    </dl>
                                </div>
                            </div>
                            <hr class="hr-sm">
                            <!-- Plan -->
                            <h4 class="text-center mb-0 pt-5">Layout</h4>
                            <!-- <p class="text-center text-sm text-muted mb-0">Click on the room to open gallery...</p> -->
                            <div id="layout" class="plan-container mb-5">
                                <!-- Plan Image -->
                                <img id="layout-img" alt="">
                                <!-- Plan Feature -->


                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <!-- Section - Video -->
            <section id="promo" class="section section-xl dark bg-dark">

                <!-- BG Image -->
                <div class="bg-image-holder"><img id="promo-background" alt=""></div>

                <!-- Content -->
                <div class="container text-center">
                    <button id="promo-video" class="btn-play animated" data-animation="fadeInUp"
                        data-toggle="video-modal" data-target="#modalVideo"></button>
                    <h2 id="promo-headline" class="mt-4 mb-0"></h2>
                </div>

            </section>

            <!-- Section -->
            <section class="section">

                <div class="container">
                    <div id="features" class="row align-items-center" data-local-scroll>
                        <div id="features-container" class="col-lg-4 push-lg-2 pr-5">
                            <h2 id="features-headline"></h2>
                            <p id="features-subtitle" class="lead"></p>
                            <!-- <a href="#make-offer" class="btn btn-secondary mb-4">Make na offer</a> -->
                        </div>
                        <div class="col-lg-4 push-lg-2">
                            <img id="features-img" class="rounded shadow animated" alt="" data-animation="fadeIn">
                        </div>
                    </div>
                </div>

            </section>

            <!-- Section - Offer -->
            <section id="make-offer" class="section bg-dark">
                <!-- BG Image -->
                <div class="bg-image-holder"><img src="../assets//img/photos/offer-bg.jpg" alt=""></div>

                <!-- Content -->
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 push-lg-2">
                            <!-- Object - Vertical -->
                            <div id="card" class="object-box">
                                <div class="object-image">
                                    <img id="card-img" src="../assets//img/objects/object01_lg.jpg" alt="">
                                </div>
                                <div class="object-content">
                                    <h5 id="card-name" class="object-title">Large Flat</h5>
                                    <ul class="object-details list-unstyled">
                                        <li><span class="text-muted">Total area:</span> <span id="card-area"></span>
                                        </li>
                                        <li><span class="text-muted">Bedrooms:</span> <span id="card-bedrooms"></span>
                                        </li>
                                    </ul>
                                    <div class="row">
                                        <div class="col-6">
                                            <strong class="text-muted">Price:</strong>
                                            <span id="card-price" class="object-price text-primary text-lg"></span>
                                        </div>
                                        <div class="col-6">
                                            <strong class="text-muted">Price per ft<sup>2</sup>:</strong>
                                            <span id="card-price_per_m2" class="object-price"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 push-lg-2 pl-lg-5 pt-5 pt-lg-0 dark">
                            <h2 class="mb-2">Make an offer!</h2>
                            <p class="lead">Mauris dolor orci, sagittis ut varius in, interdum nec sapien.</p>
                            <form action="#" id="offer-form" data-validate>
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input type="text" name="name" class="form-control" placeholder="Enter here"
                                        required>
                                </div>
                                <div class="form-group">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" class="form-control" placeholder="Enter here"
                                        required>
                                </div>
                                <div class="form-group">
                                    <label>Phone number:</label>
                                    <input type="text" name="phone" class="form-control" placeholder="Enter here"
                                        required>
                                </div>
                                <button class="btn btn-primary btn-submit btn-block" type="submit">
                                    <span class="description">Make Offer</span>
                                    <span class="success">
                                        <svg x="0px" y="0px" viewBox="0 0 32 32">
                                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none"
                                                stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"
                                                stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                        </svg>
                                    </span>
                                    <span class="error">Try again...</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </div>
        <!-- Content / End -->

        <!-- Footer -->
        <footer id="footer" class="footer-fixed bg-dark dark">
        
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-3 text-center text-md-left mb-5 mb-md-0">
                        <a href="../index.php"><img src="../assets/img/logo-light.png" width="120" alt=""></a>
                    </div>
                    <div class="content col-xl-4 col-md-5">
                        <address>
                            Lily Builders<br>
                            60/1 R.N.D road,<br>
                            Lalbagh ,Dhaka-1211<br>
                        </address>
                        <p class="lead">
                            E: <a class="link-inherit" href="mailto:ask@lilybuilders.com">ask@lilybuilders.com</a><br>
                            P: +8801872796650
                        </p>
                        <a class="facebook_link" href="#" class="icon icon-circle icon-sm icon-facebook"><i
                                class="fa fa-facebook"></i></a>
                        <a class="google_link" href="#" class="icon icon-circle icon-sm icon-google"><i
                                class="fa fa-google"></i></a>
                        <a class="instagram_link" href="#" class="icon icon-circle icon-sm icon-instagram"><i
                                class="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        
        </footer>

        <!-- Body Overlay -->
        <div id="body-overlay"></div>

    </div>

    <!-- Panel - Objects -->
    <nav id="panel-objects">
    
        <div class="panel-objects-container container dark">
    
            <h3 class="text-center mb-5">Pick a location:</h3>
    
            <div class="panel-objects-list row">
                <div class="col-md-4 col-sm-6">
                    <!-- Panel Objects Item -->
                    <div class="panel-objects-item">
                        <a href="../index.php" class="panel-objects-item-image"><img src="../assets/img/home/location.png"
                                alt=""></a>
                        <div class="panel-objects-item-content">
                            <a href="../index.php" class="link-reset">
                                <h5 class="mb-0">60/1 R.N.D road , Lalbagh ,Dhaka-1211</h5>
                                <ul class="list-inline mb-0">
                                    <!-- <li class="list-inline-item"><span class="text-muted">Total area:</span> 22m</li>
                                    <li class="list-inline-item"><span class="text-muted">Number of flats:</span> 32</li> -->
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Close -->
            <button class="panel-objects-close close" data-toggle="panel-objects"></button>
    
        </div>
    </nav>


    <!-- Video Modal / Demo -->
    <div class="modal modal-video fade" id="modalVideo" role="dialog">
        <button class="close dark" data-dismiss="modal"></button>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <iframe height="500"></iframe>
            </div>
        </div>
    </div>

    <!-- JS Plugins -->
    <script src="../assets//plugins/jquery/dist/jquery.min.js"></script>
    <script src="../assets//plugins/animsition/dist/js/animsition.min.js"></script>
    <script src="../assets//plugins/tether/dist/js/tether.min.js"></script>
    <script src="../assets//plugins/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../assets//plugins/slick-carousel/slick/slick.min.js"></script>
    <script src="../assets//plugins/jquery.appear/jquery.appear.js"></script>
    <script src="../assets//plugins/jquery.scrollto/jquery.scrollTo.min.js"></script>
    <script src="../assets//plugins/jquery.localscroll/jquery.localScroll.min.js"></script>
    <script src="../assets//plugins/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="../assets//plugins/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="../assets//plugins/photoswipe/dist/photoswipe.min.js"></script>
    <script src="../assets//plugins/photoswipe/dist/photoswipe-ui-default.min.js"></script>
    <script src="../assets//plugins/twitter-fetcher/js/twitterFetcher_min.js"></script>

    <!-- JS Core -->
    <script src="../assets//js/core.min.js"></script>
    <script src="../assets//js/populate_object.js"></script>

    <!-- JS Gallery -->
    <script>
        // var gallerySliderItems = [
        //     {
        //         src: 'assets/img/photos/slider01.jpg',
        //         w: 1920,
        //         h: 1080
        //     },
        //     {
        //         src: 'assets/img/photos/slider02.jpg',
        //         w: 1920,
        //         h: 1080
        //     },
        //     {
        //         src: 'assets/img/photos/slider03.jpg',
        //         w: 1920,
        //         h: 1080
        //     },
        //     {
        //         src: 'assets/img/photos/slider04.jpg',
        //         w: 1920,
        //         h: 1080
        //     },
        //     {
        //         src: 'assets/img/photos/slider05.jpg',
        //         w: 1920,
        //         h: 1080
        //     }
        // ];

        var galleryCarouselItems = [
            {
                src: 'assets/img/gallery/gallery01.jpg',
                w: 1100,
                h: 750
            },
            {
                src: 'assets/img/gallery/gallery02.jpg',
                w: 1100,
                h: 750
            },
            {
                src: 'assets/img/gallery/gallery03.jpg',
                w: 1100,
                h: 750
            },
            {
                src: 'assets/img/gallery/gallery04.jpg',
                w: 1100,
                h: 750
            },
            {
                src: 'assets/img/gallery/gallery05.jpg',
                w: 1100,
                h: 750
            },
            {
                src: 'assets/img/gallery/gallery06.jpg',
                w: 1100,
                h: 750
            }
        ];
        populate(window.location.href.split('/').splice(-1)[0].split('.')[0]);
    </script>

    <!-- JS Google Map -->
    

</body>

</html>