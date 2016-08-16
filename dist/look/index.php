<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Фотографии. Into Journal</title>
		<meta name="description" content="">
		<!-- styles -->
		<link rel="stylesheet" href="/css/normalize.css">
		<link rel="stylesheet" href="/css/main.min.css">
		<link rel="stylesheet" href="/css/fotorama.css">
		<!-- scripts -->
		<script src="/js/jquery-2.2.3.min.js"></script>
		<script src="/js/fotorama.js"></script>

		<style>
		body, html {background: #1a1a1a;}
		.page_look {position: relative;}
		.page_look .page__fotorama {position: fixed; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 1;}
		.page_look .page__logo {position: absolute; top: 30px; right: 30px; left: auto; z-index: 2; text-transform: uppercase;}
		.page_look .page__title {position: absolute; left: 30px; top: 120px; z-index: 2;}
		.page_look .page__title-text {display: inline-block; font: normal 2.8rem HelveticaNeueCyr-Thin; position: relative; color: #fff;}
		.page_look .page__title-text:after {content: ""; display: block; position: absolute; border-top: 1px solid #fff; width: 32px; bottom: 0;}
		
		.page__nav {
			display: block;
    		height: 80px;
    		z-index: 10000;
    		position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background: rgba(0,0,0,0.7);
			text-align: right;
			padding-right: 40px;
		}
		.nav__item {
			display: inline-block;
			margin: 20px 5px;
		}
		.look-button {
			display: inline-block;
			text-align: center;
			border-radius: 2px;
			border: 1px solid white;
			color: white;
			font-size: 18px;
    		font-family: Helvetica;
    		padding: 10px 20px;
    		transition: all .2s ease;
		}
		.look-button:hover {background-color: white; color: black;}


		.fotorama_look {}
		.fotorama_look .fotorama__caption {right: auto; left: 20px; bottom: 25px; position: fixed; z-index: 1000;}
		.fotorama_look .fotorama__caption * {font: 500 1.6rem Helvetica; color: #fff;}
		.fotorama_look .fotorama__caption__wrap {background: rgba(0,0,0,.2); border-radius: 2px;}
		.fotorama_look .fotorama__caption-link {transition: all .5s ease; z-index: 20000;}
		.fotorama_look .fotorama__caption-text {}
		.fotorama_look .fotorama__caption-link:link, .fotorama_look .fotorama__caption-link:visited {color: #fff; border-bottom: 1px solid rgba(255,255,255,.4);}
		.fotorama_look .fotorama__caption-link:hover {color: #00adee; border-bottom-color: #00adee;}
		.fotorama_look .fotorama__arr--prev {left: 21px;}
		.fotorama_look .fotorama__arr--next {right: 21px;}

		.logo_look {}
		.logo_look .logo__link {display: inline-block; text-align: center; padding: 8px 44px; font: normal 1.6rem MuseoCyrl-500; border: 1px solid #4eb96f; background: #4eb96f; color: #fff; opacity: .7;}
		.logo_look .logo__link:hover {opacity: 1; transition: all .5s ease;}
		</style>
	</head>

	<body>
		<?require($_SERVER["DOCUMENT_ROOT"]."/seo/metrika.php");?>
		<div class="page page_look">
			<div class="page__title">
				<h1 class="page__title-text">Смотреть</h1>
			</div>
			<div class="page__logo">
				<div class="logo logo_look">
					<a href="../" class="logo__link">Into<br>Journal</a>
				</div>
			</div>
			<div class="page__fotorama">
				<div class="fotorama fotorama_look" 
					data-nav="false"
					data-fit="cover"
					data-width="100%"
					data-height="100%"
					data-loop="true"
					data-swipe="true"
					data-trackpad="true"
					data-hash="true"
					data-keyboard="true"
				>
					<img src="/img/look/3.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/1.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/2.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/4.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/5.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/6.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/7.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/8.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
					<img src="/img/look/9.jpg" data-caption="<a href='../read/#1' class='fotorama__caption-link'>Мечта детства</a> <span class='fotorama__caption-text'>1 &mdash; 5</span>">
				</div>
				
			</div>
			<div class="page__nav">
				<div class="nav">
					<div class="nav__item">
						<a href="/read/" class="look-button">Читать</a>
					</div>
					<div class="nav__item">
						<a href="/" class="look-button">Содержание</a>
					</div>
					<div class="nav__item">
						<a href="https://intojob.ru/" class="look-button">Вернуться</a>
					</div>
				</div>
			</div>
		</div>
		
	</body>
</html>