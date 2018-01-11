<?php
 set_time_limit(300);
 $tablo = $_POST['tablo'];
 include "file_constants.php";
 // just so we know it is broken
 error_reporting(E_ALL);
 // some basic sanity checks
     //connect to the db
     $link = mysqli_connect($host, $user, $pass, $db)
     or die("Could not connect: " . mysqli_error());

     // select our database
     //mysql_select_db("$db") or die(mysql_error());

     // get the image from the db
     $sql = "SELECT * FROM ".$tablo.";";

     // the result of the query
     $result = mysqli_query($link ,$sql) or die($tablo."Invalid query: " . mysqli_error($link));

     // set the header for the image
     //header("Content-type: image/jpeg");
     echo '<div class="urun-ler">';
     while($row = mysqli_fetch_array($result)){
          echo '<div class="urun">';
               echo '<img src="data:image/jpeg;base64,'.base64_encode($row['foto']).'"/>';
               echo '<hr>
                    <div class="marka-model">
                         <p>
                              <b>'.$row['marka'].'</br>'.$row['model'].'</b>
                         </p>
                    </div>';
          echo '</div>';
     }
     echo '</div>';

     // close the db link
     mysqli_close($link);
?>