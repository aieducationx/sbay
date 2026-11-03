/* ============================================================================
   Ders videoları — YouTube bağlantıları

   Bu dosya, yirmi dört dersin videosunu platforma bağlayan tek yerdir.
   Kodun başka hiçbir yerine dokunmanız gerekmez.

   NASIL YAPILIR
   -------------
   1. Videoyu YouTube'a yükleyin. Görünürlük "Herkese açık" ya da
      "Liste dışı (unlisted)" olmalı. "Gizli (private)" videolar
      gömülemez; kara bir kutu olarak görünür.
   2. Videonun adresini kopyalayın ve aşağıdaki karşılığının yanına
      tırnak içinde yapıştırın. Şu biçimlerin hepsi çalışır:

          "D01": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
          "D01": "https://youtu.be/XXXXXXXXXXX",
          "D01": "https://www.youtube.com/embed/XXXXXXXXXXX",

   3. Dosyayı kaydedin, GitHub'a gönderin. Bitti.

   Platform videoyu youtube-nocookie.com üzerinden gömer; YouTube'un
   izleme çerezleri, izleyici oynatıcıya dokunana kadar yazılmaz.
   Not: YouTube kullanıldığında sayfa artık "hiçbir yere veri gitmez"
   olmaktan çıkar — izleyicinin tarayıcısı YouTube'a bağlanır. Bunu
   ders izlencesinde bir satırla belirtmeniz yeterli.

   BOŞ BIRAKILAN DERSLER
   ---------------------
   Videosu henüz yayımlanmamış dersler bozulmaz: oynatıcının yerinde
   "Bu dersin videosu henüz yayımlanmadı" kutusu ve elle "İzledim olarak
   işaretle" düğmesi görünür. Dersin diğer dört adımı normal işler.
   Videoları sırayla, hazır oldukça ekleyebilirsiniz.

   YEREL DOSYA (ikinci yol)
   ------------------------
   YouTube istemiyorsanız videoyu depodaki "video" klasörüne koyup buraya
   yalnızca dosya adını yazın: "D01": "D01.mp4". GitHub'da tarayıcıyla
   yüklenebilecek en büyük dosya 25 MB'dir ve Pages'in aylık 100 GB
   bant genişliği sınırı vardır; bu yüzden YouTube önerilir.

   BRIEF'LER
   ---------
   Her dersin çekim brief'i ve kaynak metni materyal/00_Video_Brief
   klasöründedir; D01 ↔ Video_01, D02 ↔ Video_02 … biçiminde eşleşir.
   Video sonuna kadar izlenince "İzle" adımı kendiliğinden tamamlanır.
   ========================================================================== */
window.SBAY_VIDEO = {

  // Yerel dosya kullanırsanız aranacak klasör. Sonundaki eğik çizgiyi silmeyin.
  klasor: "video/",

  dersler: {

    // ---- Bölüm 1 · Araştırmanın Temelleri ----
    "D01": "https://youtu.be/ALXymMZ9AU4",                // 1A   Nereden Biliyorsunuz?
    "D02": "https://youtu.be/4PP-k97Q6FM",                // 1B   Yöntemden Önce Varsayım
    "D03": "https://youtu.be/sd6VfiKiznY",                // 2A   Konu Değil, Soru
    "D04": "https://youtu.be/v5WT-wvcwyY",                // 2B   Muhabir mi, Eleştirmen mi?
    "D05": "https://youtu.be/we64sho1ZYc",                // 3A   Onay Belgesi Bir Savunma Değildir
    "D06": "https://youtu.be/bfwpZLv6AM0",                // 3B   Kod Verdiniz, Anonim Değilsiniz

    // ---- Bölüm 2 · Nicel Araştırma ----
    "D07": "https://youtu.be/PQlgm7V5WUA",                // 4A   Adı Değil, Rolü
    "D08": "https://youtu.be/KKQQcq_KPbc",                // 4B   Kimin Adına Konuşuyorsunuz?
    "D09": "",                                            // 5A   O Dokuz Puanı Kim Yarattı?
    "D10": "",                                            // 5B   On Bir Rakip Hikâye
    "D11": "",                                            // 6A   Analiz Menüden Başlamaz
    "D12": "",                                            // 6B   p Küçük, Fark Kaç Puan?

    // ---- Bölüm 3 · Nitel Araştırma ----
    "D13": "",                                            // 7A   Küçük Örneklem Değil, Sınırlı Sistem
    "D14": "",                                            // 7B   Adını Koyduğunuz Desenin Borcu
    "D15": "",                                            // 8A   Sayı Değil, Bilgi Gücü
    "D16": "",                                            // 8B   Ekran da Bir Sahadır
    "D17": "",                                            // 9A   Kim Kurdu Bu Temayı?
    "D18": "",                                            // 9B   Katsayı mı, Denetim İzi mi?

    // ---- Bölüm 4 · Birleştirme ve Raporlaştırma ----
    "D19": "",                                            // 10A  İki Veri Toplamak Yetmez
    "D20": "",                                            // 10B  Hangi Tabloda Buluşuyorlar?
    "D21": "",                                            // 11A  Uygulayan ile Değerlendiren Aynı Kişi
    "D22": "",                                            // 11B  Takvimi Geriye Doğru Kurun
    "D23": "",                                            // 12A  Zombi İsimler ve Diri Cümleler
    "D24": "",                                            // 12B  Beyan Edilmeyen Her Şey
  },
};
