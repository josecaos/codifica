<ul id="menu-lista" class="grid-x cell grid-padding-x">
<li class="grid-x medium-6 cell align-middle h-100"></li>
<?php
$item = array('Inicio','Servicios','Portafolio','Contacto');
$link = array('#1','#2','#3','#4');
for ($i=0; $i < 3; $i++):
  ?>

  <li class="grid-x medium-2 cell align-middle h-100">

    <a href="<?php echo $link[$i]; ?>" class="cell h-a text-right">

        <?php echo $item[$i]; ?>

    </a>

  </li>

<?php endfor; ?>

</ul>
