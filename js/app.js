$(document).foundation()
var u = new Utils()
$(document).ready(function() {

setup_resize()

menu_movil()

img_liquid()

})
//fin ready
// funciones
function setup_resize() {

  u.addWindowResizeFunction( u.verticalCenter )
  u.addWindowResizeFunction( u.shareW )
  u.addWindowResizeFunction( menu_movil )
  // u.addWindowResizeFunction( u.shareH )

  setTimeout(function(){

    $(window).trigger('resize')

  },100)

}

function img_liquid() {

  $(".imgLiquid.imgLiquidFill").imgLiquid()

  $(".imgLiquid.imgLiquidNoFill").imgLiquid({fill:false})

  $(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false,
    horizontalAlign:"left"
  })
  $(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
    fill:false,
    horizontalAlign:"right"
  })

}

var menumovil = $("#menu-movil");

function menu_movil() {
  // registra su posicion actual, fuera de la pantalla
  var anchomenumovil = menumovil.width() + 40
  var posicioninicial = menumovil.css({
    'transition': '0.01s',
    '-webkit-transform': 'translateX(' + anchomenumovil + 'px)',
    '-moz-transform': 'translateX(' + anchomenumovil +'px)',
    '-ms-transform': 'translateX(' + anchomenumovil +'px)',
    '-o-transform': 'translateX(' + anchomenumovil +'px)',
    'transform': 'translateX(' + anchomenumovil +'px)'
  })
  var menuicono = $('#boton-menu-movil i');

  // reset del icono en caso de resize
  if (menuicono.hasClass('fa-close')) {

    menuicono.removeClass('fa-close').addClass('fa-bars');

  }
  //
  var salemenu = {
    'transition': '0.5s',
    '-webkit-transform': 'translateX(' + anchomenumovil + 'px)',
    '-moz-transform': 'translateX(' + anchomenumovil +'px)',
    '-ms-transform': 'translateX(' + anchomenumovil +'px)',
    '-o-transform': 'translateX(' + anchomenumovil +'px)',
    'transform': 'translateX(' + anchomenumovil +'px)'
  }

  $('#boton-menu-movil').on('click', function() {

    var posicion = menumovil.position();

    if(posicion.left >= $(document).width()) {
      // entra
      menumovil.css({
        'transition': '0.5s',
        '-webkit-transform': 'translateX(0px)',
        '-moz-transform': 'translateX(0px)',
        '-ms-transform': 'translateX(0px)',
        '-o-transform': 'translateX(0px)',
        'transform': 'translateX(0px)'
      });
      //

      // gira
      menuicono.toggleClass('gira-icono-menu');

      //cambia icono
      setTimeout(function() {

        menuicono.removeClass('fa-bars black').addClass('fa-close');

      },125);

      // reset gira-icono-menu
      setTimeout(function() {

        menuicono.toggleClass('gira-icono-menu');

      },500)


    } else {
      // sale menu
      menumovil.css(salemenu)
      // gira
      menuicono.toggleClass('gira-icono-menu')
      //cambia el icono
      setTimeout(function() {

        menuicono.removeClass('fa-close black').addClass('fa-bars');

      },125);

      //reset giro
      setTimeout(function() {

        menuicono.toggleClass('gira-icono-menu');

      },500);

    }

  });

}
