# Sosyal Bilimlerde Araştırma Yöntemleri — Mikroöğretim

Anadolu Üniversitesi Eğitim Bilimleri Enstitüsü, Sosyal Bilgiler Eğitimi yüksek
lisans programı için hazırlanmış açık eğitim kaynağı. On iki hafta, yirmi dört ders,
her ders beş adım: **Oku · İzle · Değerlendirme · Görev · Üret ve Paylaş**.

Dönem boyunca biriken on iki **Uygulama Yaprağı**, sonunda öğrencinin kendi yazdığı
tam bir araştırma önerisine dönüşür.

**Canlı sürüm:** https://aieducationx.github.io/sbay/

## Üç sayfa

| Sayfa | Ne |
|---|---|
| `index.html` | Giriş — dersin ne olduğu, nasıl işlediği |
| `ders.html` | Platformun tamamı: yirmi dört ders, beş adım, sınavlar, karne. Tek dosya, bağımlılıksız |
| `materyal.html` | Bütün indirilebilir dosyaların dizini |

## Depodaki klasörler

| Klasör | İçerik |
|---|---|
| `materyal/00_Genel/` | Ders kitabının tamamı ve izlence |
| `materyal/Hafta01…12/` | Her hafta beş PDF: kitap bölümü, ders planı, konuşma metni, etkinlik yaprakları, sunum |
| `materyal/00_Video_Brief/` | Yirmi dört videonun çekim brief'i ve kaynak metni |
| `pdf/` | Altmış alt başlığın ayrı PDF'i — Oku adımındaki **PDF ↓** düğmesi buradan açar |
| `videolar.js` | Videoların YouTube adreslerinin yazıldığı yer |

Tek başına duran dosyalar: `.nojekyll` (Pages'in dosyaları olduğu gibi yayımlaması
için), `404.html`, `LICENSE`, `00_YOUTUBE_BAGLANTILARI.txt`.

## Dersler

Her haftanın bölümü ikiye ayrılmıştır: **A** dersi bölümün ilk yarısını, **B** dersi
ikinci yarısını işler. B derslerinin okuma adımına o haftanın Araştırma Alıştırması,
Uygulama Yaprağı ve Sosyal Bilgiler Penceresi de eklenmiştir.

| Bölüm | Haftalar | Dersler |
|---|---|---|
| 1 · Araştırmanın Temelleri | 1–3 | D01–D06 |
| 2 · Nicel Araştırma | 4–6 | D07–D12 |
| 3 · Nitel Araştırma | 7–9 | D13–D18 |
| 4 · Birleştirme ve Raporlaştırma | 10–12 | D19–D24 |

## Video — YouTube

Videolar YouTube'a yüklenir, platform onları `youtube-nocookie.com` üzerinden gömer.
Bağlamak için tek yapılacak, `videolar.js` içinde ilgili dersin karşısına adresi
yazmaktır:

```js
"D01": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
```

Görünürlük **Herkese açık** ya da **Liste dışı (unlisted)** olmalı; *gizli/private*
videolar gömülemez. Boş bırakılan derslerde oynatıcının yerinde "henüz yayımlanmadı"
kutusu ve elle işaretleme düğmesi görünür; dersin diğer dört adımı normal işler.
Videoları hazır oldukça sırayla ekleyebilirsiniz. `00_YOUTUBE_BAGLANTILARI.txt`,
hangi numaranın hangi derse ait olduğunu gösteren doldurulmaya hazır bir çizelgedir.

Çekim brief'leri `materyal/00_Video_Brief/` içindedir: ilk sayfa yönerge, arkası
videonun dayandığı kaynak metnin tamamı. `D01 ↔ Video_01` biçiminde eşleşir.

## GitHub Pages ile yayımlamak

1. Bu klasörün içindekileri bir depoya gönderin (kök dizine, alt klasöre değil).
2. Depoda **Settings → Pages → Source: Deploy from a branch**, dal `main`, klasör
   `/ (root)`.
3. Bir–iki dakika sonra site `https://KULLANICI.github.io/DEPO/` adresinde açılır.

`.nojekyll` dosyasını silmeyin: Jekyll, adı alt çizgiyle başlayan dosyaları
yayımlamaz. Dosya adları büyük/küçük harfe duyarlıdır; `Pdf/` ile `pdf/` aynı
değildir.

## Gizlilik

Platform kayıt istemez, çerez kullanmaz ve hiçbir sunucuya veri göndermez.
İlerleme yalnızca ziyaretçinin kendi tarayıcısında (`localStorage`) tutulur; karne
ve yedek dosyaları ziyaretçinin kendi bilgisayarına iner. Tek istisna video: bir
ders videosu izlendiğinde tarayıcı YouTube'a bağlanır.

## Lisans

CC BY-NC-SA 4.0 — Atıf, GayriTicari, AynıLisanslaPaylaş.
© 2026 Prof. Dr. Hıdır Karaduman, Anadolu Üniversitesi.

Önerilen atıf:

> Karaduman, H. (2026). *Sosyal Bilimlerde Araştırma Yöntemleri: Mikroöğretim
> Platformu ve Ders Materyalleri.* Anadolu Üniversitesi. CC BY-NC-SA 4.0.
