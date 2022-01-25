<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="">
    <!-- Link Material Icons Fonts -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Link Font Awesome -->
    <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css">
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
    <!-- Base CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <title>Barjlazuardi | Welcome</title>
</head>
<body>

    <div id="app">
        <main>
            <router-view></router-view>
            <!-- <footer-component></footer-component> -->
            <example-component></example-component>
        </main>

    </div>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script> -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>