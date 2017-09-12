
</main>

<footer id="footer" class="columns h-10-v fixed bottom left color-blanco-bg shadow-up z1k1">

  <div id="social" class="columns small-6 p-0">

    <?php

    $iconos = array('github', 'twitter', 'facebook', 'instagram');
    $iconos_size = count($iconos);


    for ($i=0; $i < $iconos_size; $i++):

      ?>

      <div class="columns v-center shareW ">

        <div class="columns p-0 h-a text-center">

          <a class="columns p-0"href="#">

            <i class="fa fa-<?php echo $iconos[$i];?> text-shadow"></i>

          </a>

        </div>

      </div>

    <?php endfor; ?>

  </div>


  <div class="copyright columns small-6 text-right v-center">

    <div class="columns p-0 h-a">

      <i class="fa fa-copyright font-xs font-md-s text-shadow"> Copyright || <?php echo date("Y"); ?></i>

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
