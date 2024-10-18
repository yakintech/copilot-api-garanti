# Use Case: Snake Game

## 1. Use Case Adı
**Snake Game**

## 2. Aktörler
- **Oyuncu**: Oyunu oynayan kullanıcı.

## 3. Ön Koşullar
- Oyuncu, oyunu başlatmak için "Start" butonuna tıklamalıdır.

## 4. Başlangıç Koşulları
- Oyuncu, "Start" butonuna tıklar ve oyun başlar.

## 5. Temel Akış
1. **Oyun Başlatma**:
   - Oyuncu, "Start" butonuna tıklar.
   - Sistem, oyunu başlatır ve yılan hareket etmeye başlar.

2. **Yön Kontrolü**:
   - Oyuncu, klavye ok tuşlarını kullanarak yılanın yönünü kontrol eder.
   - Sistem, yılanın yönünü günceller ve hareket ettirir.

3. **Yiyecek Yeme**:
   - Yılan, yiyeceğe çarptığında sistem yiyeceği yediğini algılar.
   - Sistem, yılanın boyunu artırır ve skoru günceller.
   - Sistem, yeni bir yiyecek oluşturur ve rastgele bir konuma yerleştirir.
   - Sistem, yiyecek yendiğinde bir ses efekti çalar.

4. **Skor ve Zorluk Seviyesi**:
   - Sistem, oyuncunun skorunu ekranda gösterir.
   - Oyuncu, zorluk seviyesini seçebilir (Kolay, Orta, Zor).
   - Sistem, seçilen zorluk seviyesine göre yılanın hızını ayarlar.

5. **Oyun Duraklatma**:
   - Oyuncu, "Pause" butonuna tıklar.
   - Sistem, oyunu duraklatır ve yılanın hareketini durdurur.

6. **Oyun Yeniden Başlatma**:
   - Oyuncu, "Restart" butonuna tıklar.
   - Sistem, oyunu yeniden başlatır ve yılanı başlangıç konumuna getirir.
   - Sistem, skoru sıfırlar ve yeni bir oyun başlatır.

7. **Oyun Bitişi**:
   - Yılan, kendisine veya duvara çarptığında oyun biter.
   - Sistem, oyuncuya oyunun bittiğini bildirir ve skoru gösterir.
   - Sistem, eğer skor yüksekse, yeni yüksek skoru kaydeder ve gösterir.

## 6. Alternatif Akışlar
- **Yiyecek Yeme Başarısız**:
  - Eğer yılan yiyeceğe çarpmazsa, sistem yılanın boyunu artırmaz ve skoru güncellemez.

- **Oyun Bitişi**:
  - Eğer yılan kendisine veya duvara çarparsa, oyun biter ve sistem oyuncuya oyunun bittiğini bildirir.

## 7. Son Koşullar
- Oyuncu, başarılı bir şekilde oyunu oynar ve skorunu görür.
- Sistem, yüksek skoru kaydeder ve gösterir.

## 8. İş Kuralları
- Yılan, yiyeceği yediğinde boyu artar ve skor güncellenir.
- Yılan kendisine veya duvara çarptığında oyun biter.
- Oyuncu, zorluk seviyesini seçebilir ve oyun hızını ayarlayabilir.
- Yiyecek yendiğinde bir ses efekti çalınır.

## Use Case Diyagramı
Aşağıda, bu use case'i görselleştiren bir diyagram bulunmaktadır:

```plaintext
+-------------------+
|     Oyuncu        |
+-------------------+
          |
          v
+-------------------+
| Oyun Başlatma     |
+-------------------+
          |
          v
+-------------------+
| Yön Kontrolü      |
+-------------------+
          |
          v
+-------------------+
| Yiyecek Yeme      |
+-------------------+
          |
          v
+-------------------+
| Skor ve Zorluk    |
| Seviyesi          |
+-------------------+
          |
          v
+-------------------+
| Oyun Duraklatma   |
+-------------------+
          |
          v
+-------------------+
| Oyun Yeniden      |
| Başlatma          |
+-------------------+
          |
          v
+-------------------+
| Oyun Bitişi       |
+-------------------+