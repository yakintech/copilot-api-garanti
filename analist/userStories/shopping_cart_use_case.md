# Use Case: Shopping Cart

## 1. Use Case Adı
**Shopping Cart**

## 2. Aktörler
- **Müşteri**: Alışveriş yapan kullanıcı.
- **Ödeme Sistemi**: PayPal veya kredi kartı ile ödeme işlemlerini gerçekleştiren sistem.

## 3. Ön Koşullar
- Müşteri siteye giriş yapmış olmalıdır.
- Müşteri, alışveriş sepetine ürün eklemiş olmalıdır.

## 4. Başlangıç Koşulları
- Müşteri, alışveriş sepetine ürün ekler.

## 5. Temel Akış
1. **Ürün Ekleme**:
   - Müşteri, alışveriş sepetine ürün ekler.
   - Sistem, ürünün sepetine eklendiğini onaylar ve toplam tutarı günceller.

2. **Sepeti Görüntüleme**:
   - Müşteri, sepetini görüntüler.
   - Sistem, sepetin içeriğini, toplam tutarı ve kargo ücretini gösterir.

3. **Kargo Ücreti Hesaplama**:
   - Sistem, sepetin toplam tutarını kontrol eder.
   - Eğer toplam tutar 200 TL üzerinde ise, kargo ücretsiz olur.
   - Eğer toplam tutar 200 TL altında ise, kargo ücreti eklenir.

4. **İlk Alışverişte Hediye Kuponu**:
   - Sistem, müşterinin ilk alışverişi olup olmadığını kontrol eder.
   - Eğer müşteri ilk alışverişini yapıyorsa, 50 TL hediye kuponu uygulanır.

5. **Ödeme Seçenekleri**:
   - Müşteri, ödeme sayfasına yönlendirilir.
   - Sistem, PayPal ve kredi kartı ile ödeme seçeneklerini sunar.
   - Müşteri, ödeme yöntemini seçer ve ödeme bilgilerini girer.

6. **Ödeme Onayı**:
   - Sistem, ödeme işlemini gerçekleştirir ve onaylar.
   - Müşteri, ödeme onayını ve sipariş detaylarını görüntüler.

## 6. Alternatif Akışlar
- **Ürün Ekleme Başarısız**:
  - Eğer ürün stokta yoksa, sistem müşteriye stokta olmadığını bildirir.
  - Müşteri, başka bir ürün seçebilir.

- **Ödeme Başarısız**:
  - Eğer ödeme işlemi başarısız olursa, sistem müşteriye ödeme hatasını bildirir.
  - Müşteri, ödeme bilgilerini tekrar girebilir veya başka bir ödeme yöntemi seçebilir.

## 7. Son Koşullar
- Müşteri, başarılı bir şekilde ödeme yapar ve sipariş oluşturulur.
- Sistem, sipariş detaylarını ve ödeme onayını müşteriye gösterir.

## 8. İş Kuralları
- 200 TL üzerinde kargo ücretsizdir.
- İlk alışverişte 50 TL hediye kuponu uygulanır.
- PayPal ve kredi kartı ile ödeme seçenekleri sunulur.

## Use Case Diyagramı
Aşağıda, bu use case'i görselleştiren bir diyagram bulunmaktadır:

```plaintext
+-------------------+
|     Müşteri       |
+-------------------+
          |
          v
+-------------------+
| Ürün Ekleme       |
+-------------------+
          |
          v
+-------------------+
| Sepeti Görüntüleme|
+-------------------+
          |
          v
+-------------------+
| Kargo Ücreti      |
| Hesaplama         |
+-------------------+
          |
          v
+-------------------+
| Hediye Kuponu     |
| Uygulama          |
+-------------------+
          |
          v
+-------------------+
| Ödeme Seçenekleri |
+-------------------+
          |
          v
+-------------------+
| Ödeme Onayı       |
+-------------------+