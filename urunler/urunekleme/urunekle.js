$(document).ready(function(){
    $("#kategoriler").children().click(function(){
        var kategori = $(this).attr("value");

        if($("#urun-ekleme").children().first().css("width") !== undefined){
            $("#urun-ekleme").children().first().next().remove();
        }

        var input_icerik = [[]];

        /***KAMERA***/
        input_icerik['adaptorlar'] = ["Marka","Model","Sağlanan Gerilim","Sağlanan Akım"];
        input_icerik['ahd_kayit_cihazlari'] = ["Marka","Model","Real Time Kayıt","Yazılım","Çıkışlar","Ses Kayıt Kanal Sayısı","Harddisk Desteği","Playback","Sıkıştırma Formatı","Kontrol Çeşidi","Kayıt İzleme","Kayıt Yedekleme","QR code ile P2P Desteği","Cepten İzleme","Cep Yazılımı","Menü Dili"];
        input_icerik['hd_tvi_kayit_cihazlari'] = ["Marka","Model","Video Sıkıştırma","Video Girişi","Video Çıkışı","Harddisk","Güç Gereksinimi","Çalışma Isısı","Diğer"];
        input_icerik['ip_nvr_kayit_cihazlari'] = ["Marka","Model"];
        input_icerik['ahd_kameralar'] = ["Marka","Model"];
        input_icerik['hd_tvi_kameralar'] = ["Marka","Model","Sensör Tipi","Sinyal Sistemi","Lens","Gece Görüş Mesafesi","Minimum Aydınlatma","Video Çıkışı","Senkronizasyon","Sinyal/Gürültü Oranı","Güç Gereksinimi","Çalışma Sıcaklığı","Ağırlık","Boyutlar","Açıklama"];
        input_icerik['ip_kameralar'] = ["Marka","Model","Çözünürlük","Lens ve Görüş Açısı","Gece Görüş Mesafesi","Shutter Hızı","Güç Gereksinimi","Çalışma Sıcaklığı","Diğer"];
        
        /***UPS***/
        input_icerik['line_interactive'] = ["Marka","Model","Dizayn","Çıkış Dalga Tipi","Giriş Voltaj Toleransı","Yedekleme Süresi","Güç","Bağlantı Arabirimi","Standartlar","Boyutlar","Açıklama"];
        input_icerik['online'] = ["Marka","Model","Dizayn","Çıkış Dalga Tipi","Giriş Voltaj Toleransı","Yedekleme Süresi","Güç","Bağlantı Arabirimi","Standartlar","Boyutlar","Açıklama"];

        /***RACK KABİN***/
        input_icerik['dikili_tip_rack_kabin'] = ["Marka","Model"];
        input_icerik['duvar_tipi_rack_kabin'] = ["Marka","Model"];

        /***TELEFON - SANTRAL***/
        input_icerik['ip_telefonlar'] = ["Marka","Model","Ekran","Ses","Kulaklık Desteği","Ethernet Portu","Diğer"];
        input_icerik['telefon_santralleri'] = ["Marka","Model"];
        input_icerik['operator_setleri'] = ["Marka","Model"];
        input_icerik['telefonlar'] = ["Marka","Model","Özellik1","Özellik2","Özellik3","Özellik4","Özellik5","Özellik6","Özellik7","Diğer"];

        /***ARAÇ SİSTEMLERİ***/
        input_icerik['arac_kameralari'] = ["Marka","Model","Diğer Özellikler"];
        input_icerik['mobil_dvr_cihazlari'] = ["Marka","Model","Diğer Özellikler"];
        input_icerik['arac_takip_sistemleri'] = ["Marka","Model","Diğer Özellikler"];

        /***BİLİŞİM***/
        input_icerik['modemler'] = ["Marka","Model","Çalışma Modları","Kablosuz Standartlar","Portlar","Anten","Led","Kablosuz Hız","Güvenlik","Boyutlar","Açıklama","Diğer Özellikler"];
        input_icerik['kablolar'] = ["Marka","Model","Diğer Özellikler"];
        input_icerik['anahtarlar'] = ["Marka","Model","Portlar","Standartlar","Led Göstergeler","Boyutlar","Açıklama","Diğer Özellikler"];
        input_icerik['harddiskler'] = ["Marka","Model","Kapasite","Devir Hızı","Ön Bellek","Arayüz","Boyut","Açıklama","Diğer Özellikler"];
        input_icerik['monitorlar'] = ["Marka","Model","Ekran Boyutu","Çözünürlük","Tepki Süresi","Çalışma Frekansı","Parlaklık","Kontrast","Nokta Aralığı","Aktif Görülebilir Alan","Bağlantı Şekli","Renk Paleti","Açıklama","Diğer Özellikler"];

        input_icerik['akular'] = ["Marka","Model"];
        var icerik = "";
        icerik = '<form enctype="multipart/form-data" action="seturun.php" method="post"><table class="form-view"><tr class="form-elemani"><td class="sol"><label>Foto: </label></td><td class="sag"><input name="0" type="file"/></td></tr></table></form>';
        $("#urun-ekleme").append(icerik);
        icerik = "";
        for(var i = 0; i < (input_icerik[kategori].length); i++){
            icerik += '<tr class="form-elemani"><td class="sol"><label>'+input_icerik[kategori][i];
            icerik += ': </label></td><td class="sag"><input class="girdi" type="text" name="' + (i+1) + '"></td></tr>';
        }
        icerik += '<tr class="form-elemani"><td><input style="display: none;" type="text" name="bilgi" value="'+kategori + ' ' + input_icerik[kategori].length + '"></td><td><input class="submitbtn" type="submit"/></td></tr>';
        $("#urun-ekleme form table").append(icerik);
    });
});