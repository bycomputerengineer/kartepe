<?php
	set_time_limit(300);
	// check if a file was submitted
	if(isset($_FILES['0']))
	{
	    try {
	    $msg= upload();  //this will upload your image
	    echo $msg;  //Message showing success or failure.
	    }
	    catch(Exception $e) {
	    echo $e->getMessage();
	    echo 'Üzgünüm, dosya yüklenemadi!';
	    }
	}

	// the upload function

	function upload() {
	    include "../file_constants.php";
	    $maxsize = 10000000; //set to approx 10 MB

	    //check associated error code
	    if($_FILES['0']['error']==UPLOAD_ERR_OK) {

	        //check whether file is uploaded with HTTP POST
	        if(is_uploaded_file($_FILES['0']['tmp_name'])) {   

	            //checks size of uploaded image on server side
	            if( $_FILES['0']['size'] < $maxsize) {  
	  
	               //checks whether uploaded file is of image type
	              //if(strpos(mime_content_type($_FILES['0']['tmp_name']),"image")===0) {
	                 /*$finfo = finfo_open(FILEINFO_MIME_TYPE);
	                if(strpos(finfo_file($finfo, $_FILES['0']['tmp_name']),"image")===0) {*/

	                    // prepare the image for insertion
	                    $imgData =addslashes (file_get_contents($_FILES['0']['tmp_name']));

	                    // put the image in the db...
	                    // database connection
	                    $conn = mysqli_connect($host, $user, $pass, $db) OR DIE (mysqli_error());

	                    $veri = $_POST['bilgi'];
	                    $tablo_ismi = strtok($veri, " ");
	                    $kolon_sayisi = strtok(" ");



	                    // our sql query
						$kolon_isimleri =  mysqli_query($conn, "SELECT COLUMN_NAME
													FROM INFORMATION_SCHEMA.COLUMNS
													WHERE TABLE_NAME='".$tablo_ismi."';");
						$sql = 'INSERT INTO '.$tablo_ismi.' (foto';
					    while ($kolon_ismi = mysqli_fetch_array($kolon_isimleri)){
					    	if($kolon_ismi[0] != "id" and $kolon_ismi[0] != "foto"){
					    		$sql .= ",".$kolon_ismi[0];
					    	}
					    }
	                    $sql .= ") VALUES ('{$imgData}'";
	                    for($i=1; $i <= $kolon_sayisi; $i++){
	                    	$sql .= ",'{$_POST["".$i]}'";
	                    }
	                    $sql .= ");";

	                    // insert the image
	                    mysqli_query($conn, $sql) or die("Error in Query: " . mysqli_error($conn));
	                    $msg='<p>Ürün veritabanına başarıyla kaydedildi</p>';
	                //}
	                /*else{
	                    $msg="<p>Uploaded file is not an image.</p>";
						echo ">>>yuklenen dosya resim degil<<<</br>";
	                }*/
	            }
	             else {
	                // if the file is not less than the maximum allowed, print an error
	                $msg='<div>Yüklemeye çalıştığınız dosyanın boyutu çok büyük!</div>
	                <div>Maksimum dosya boyutu '.$maxsize.' Byte olmalıdır.</div>
	                <div>Yüklemeye çalıştığınız '.$_FILES['0']['name'].' dosyası '.$_FILES['0']['size'].
	                ' Byte.</div><hr />';
	                }
	        }
	        else{
	            $msg="Dosya yükleme başarısız!";
	        }

	    }
	    else {
	        $msg= file_upload_error_message($_FILES['0']['error']);
	    }
	    return $msg;
	}

	// Function to return error message based on error code

	function file_upload_error_message($error_code) {
	    switch ($error_code) {
	        case UPLOAD_ERR_INI_SIZE:
	            return 'The uploaded file exceeds the upload_max_filesize directive in php.ini';
	        case UPLOAD_ERR_FORM_SIZE:
	            return 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form';
	        case UPLOAD_ERR_PARTIAL:
	            return 'The uploaded file was only partially uploaded';
	        case UPLOAD_ERR_NO_FILE:
	            return 'No file was uploaded';
	        case UPLOAD_ERR_NO_TMP_DIR:
	            return 'Missing a temporary folder';
	        case UPLOAD_ERR_CANT_WRITE:
	            return 'Failed to write file to disk';
	        case UPLOAD_ERR_EXTENSION:
	            return 'File upload stopped by extension';
	        default:
	            return 'Unknown upload error';
	    }
	}
?>