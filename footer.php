
</main>

<footer id="footer" class="grid-x cell h-footer fixed bottom left color-blanco-bg shadow-up z1k1">

  <div id="social" class="grid-x cell small-6 align-middle">

    <?php

    $iconos = array('github', 'twitter', 'facebook', 'instagram');
    $iconos_size = count($iconos);


    for ($i=0; $i < 4; $i++):

      ?>


        <div class="small-3 cell h-a">

          <a class="grid-x cell text-center" href="#">

            <i class="cell fa fa-<?php echo $iconos[$i];?> text-shadow"></i>

          </a>

        </div>

    <?php endfor; ?>

  </div>


  <div class="copyright grid-x small-6 grid-padding-x align-middle text-right">

    <div class="cell p-0 h-a">

      <i class="fa fa-copyright font-xs font-md-s text-shadow"> Codifica Dev. || <?php echo date("Y"); ?></i>

    </div>

  </div>

</footer>


<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/what-input/dist/what-input.js"></script>
<script src="bower_components/foundation-sites/dist/js/foundation.js"></script>
<script src="bower_components/imgLiquid/js/imgLiquid.js"></script>
<script src="js/app.js"></script>
</body>
</html>
