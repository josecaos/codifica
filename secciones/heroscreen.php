<!-- Este archivo es la base para las secciones de el sitio -->
<section class="columns p-0 h-100-v p-top p-bottom">


  <div class="columns p-0 v-center">

    <?php

    $content = 'Kernspaltung base template';
    for ($i=0; $i < 5 ; $i++):

      $content_mix = str_shuffle($content);
      ?>

      <div class="columns p-0 h-a text-center">

        <?php if ($i >= 4):

          echo $content;

        else:

          echo $content_mix;

        endif; ?>

      </div>



    <?php endfor; ?>

  </div>


</section>
