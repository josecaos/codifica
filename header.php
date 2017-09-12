<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codifica</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>

    <header id="header" class="columns h-10 fixed top left color-blanco-bg shadow z1k1">

      <div id="header-logo" class="columns small-3 imgLiquid imgLiquidNoFillLeft" >
        <img src="http://fakeimg.pl/180x95/?text=Logo" alt="Codifica Dev" />
      </div>

      <!-- escritorio -->
      <nav id="menu-escritorio" class="columns small-9 show-for-large">

        <?php include_once "secciones/menu.php" ?>

      </nav>
      <!--  -->

      <!--parte movil -->
      <div id="header-movil" class="columns small-9 hide-for-large">

        <div class="columns small-9"></div>

        <div class="columns small-3 p-0 v-center">

          <div class="columns p-0 h-a text-right">

            <a id="boton-menu-movil" class="columns p-0 " href="#">

              <i class="fa fa-bars font-l"></i>

            </a>

          </div>

        </div>

      </div>
      <!--  -->

    </header>
    <div id="menu-movil" class="columns h-100-v fixed p-top p-bottom color-primary-0-bg z1k hide-for-large">

      <?php echo "este es el menu movil"; ?>

    </div>





    <main id="main" class="columns">
