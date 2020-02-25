<?php

$myfile = fopen("/var/www/html/th/wth.th", "r") or die("Unable to open file!");

echo fread($myfile,filesize("../th/wth.th"));

fclose($myfile);

?>
