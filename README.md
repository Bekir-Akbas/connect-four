Connect Four Dokümantasyonu
giriş
Connect Four, oyuncuların sırayla renkli diskleri üstten dikey olarak asılı bir ızgaraya bıraktıkları klasik iki oyunculu bir bağlantı oyunudur. Oyunun amacı, kişinin kendi aynı renkteki disklerinden dördünü ardı ardına dikey, yatay veya çapraz olarak rakibinden önce birleştirmektir.

Bu belge Connect Four oyununu oluşturan HTML, CSS ve JavaScript koduna genel bir bakış sağlar.

İçindekiler
HTML Yapısı
CSS Stilleri
JavaScript İşlevleri
HTML Yapısı <a name="html-structure"></a>
HTML yapısı Connect Four oyununda kullanılan düzeni ve öğeleri tanımlar. Temel bileşenler aşağıdaki gibidir:

<head> Bölüm:

Karakter seti ve görünüm ayarları için meta etiketler.
Harici CSS dosyasına bağlantı (Four.css'yi bağlayın).
Oyunun başlığı.
<body> Bölümü:

Başlangıç ​​Ekranı (başlangıç ​​ekranı):

<img src="başlangiç ekranı.png">

Karşılama mesajı.
Oyuncunun adı için giriş.
Oyuncunun rengini seçmek için açılır menü.
Oyunu başlatmak, bilgisayara karşı oynamak, iki oyuncuyla oynamak, oyun ayarlarını yapılandırmak ve maç geçmişini görüntülemek için kullanılan düğmeler.
Maç Geçmişi Ekranı (maç geçmişi ekranı):

Ana menüye dönmek için bir çıkış düğmesiyle eşleşme geçmişini görüntüler.
Ayarlar Formu (ayarlar formu):

Arka plan rengi, tahta rengi ve oyun adı dahil olmak üzere oyun ayarlarını özelleştirmek için form.
Oyun Ekranı (oyun ekranı):

Oyun başlığı.
Oyun tahtası ızgarası.
Mevcut oyuncu için gösterge.
Oyun sonuçlarını görüntüleyin.
Yeniden başlat düğmesi (varsayılan olarak gizlidir).
JavaScript Komut Dosyası:

Harici JavaScript dosyasına bağlantı (Connect Four.js).
CSS Stilleri <a name="css-styles"></a>
CSS stilleri Connect Four oyununun görsel sunumunu tanımlar. Önemli stiller şunları içerir:

Vücut Stilleri:

İçeriği merkezleme.
Yazı tipini ve arka planı ayarlama.
Konteyner Stilleri:

Kapsayıcılarda metni ortalama.
Tahta Stilleri:

Oyun tahtasını ızgara düzeni, hücre boyutu ve arka plan rengiyle şekillendirmek.
Tek tek hücreleri kenarlıklar, dairesel şekil ve vurgulu efektle şekillendirme.
Oyuncu Renk Stilleri:

Oynatıcı renkli disklerini dairesel görüntülerle şekillendirme.
Başlangıç ​​Ekranı Stilleri:

Başlangıç ​​ekranını arka plan rengi, kenarlık ve giriş/düğme stilleriyle şekillendirme.
Düğmeler için vurgulu efektler.
Ayarlar Form Stilleri:

Ayarlar formunu arka plan rengi, kenarlık ve giriş/düğme stilleriyle şekillendirme.
Düğmeler için vurgulu efektler.
Çıkış Düğmesi Stilleri:

Çıkış düğmesini arka plan rengi, metin rengi ve fareyle üzerine gelme efektiyle şekillendirme.

JavaScript İşlevleri <a name="javascript-functions"></a>
JavaScript kodu oyun mantığını ve etkileşimini uygular. Anahtar işlevler şunları içerir:

Oyunun Başlatılması:

createBoard: Oyun tahtasını boş değerlerle başlatır.
DrawBoard: Oyun tahtasını HTML belgesinde işler.
Oyuncu Yönetimi:

switchPlayer: Geçerli oynatıcıyı değiştirir.
Taşıma İşlemi:

makeMove: Oyuncunun hareketlerini yönetir ve bilgisayara karşı oynanıyorsa bilgisayarın hareketini başlatır.
Kazanma ve Beraberlik Koşulları:

checkWin: Bir oyuncunun kazanıp kazanmadığını kontrol eder.
checkDraw: Oyunun berabere olup olmadığını kontrol eder.
Kullanıcı Arayüzü Güncellemeleri:

updateCurrentPlayerIndicator: Kullanıcı arayüzündeki mevcut oynatıcı göstergesini günceller.
HighlightWinningSequence: Tahtadaki kazanma sırasını vurgular.
Oyun Ayarları ve Ekran:

ApplySettings: Arka plan rengi ve oyun adı gibi kullanıcı tanımlı ayarları uygular.
showSettingsForm: Ayarlar formunu görüntüler.
Maç Geçmişi:

updateMatchHistory: Yerel depolamadaki eşleşme geçmişini günceller.
viewMatchHistory: Maç geçmişi ekranını görüntüler.
Oyun Başlatma ve Özel Oyun Modları:

startGame: Tek bir oyuncu tarafından başlatıldığında oyunu başlatır.
CustomFunction1 ve CustomFunction2: Bilgisayara karşı veya iki oyuncuyla oynamak için oyun kurulumunu yönetin.
İlk kurulum:

Başlangıç ​​oyun tahtasını kurar ve çizer.
Bu belge Connect Four oyun kod tabanına genel bir bakış sağlar. Geliştiriciler, oyunun işlevselliğini ve görünümünü anlamak ve değiştirmek için bunu referans olarak kullanabilirler.

