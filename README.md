# Mộc — Bài thực hành giao diện TMĐT

Mộc là một trang giới thiệu sách được làm bằng HTML/CSS sau khi khảo sát website Fahasa. Bài tập tập trung vào cách trình bày thẻ sản phẩm cho dễ đọc và dễ xem trên màn hình nhỏ.

## Website tham khảo

- Fahasa: https://www.fahasa.com/
- Ngày khảo sát: 20/10/2026.
- Các phần đã xem: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- [Bảng khảo sát và ảnh chụp](docs/bao-cao.html).

## Nội dung đã làm

- Một trang giới thiệu tủ sách với 4 sản phẩm mẫu.
- Mỗi sách có ảnh bìa, tên, tác giả, giá và nút xem chi tiết.
- Giá giảm được đặt cạnh giá gốc và số tiền tiết kiệm.
- Tên sách được hiện đầy đủ, không cắt bằng dấu ba chấm.
- Bố cục đổi số cột theo chiều rộng màn hình.
- Nút “Xem chi tiết” đổi thành “Thu gọn” khi mở.

Bài chỉ làm giao diện, chưa có giỏ hàng hoặc thanh toán. Tên sách, tác giả và giá là dữ liệu mẫu; bìa được tự thiết kế.

## Cách chạy

Giải nén cả thư mục rồi mở `index.html` bằng trình duyệt. CSS nằm trong `css/style.css`, ảnh nằm trong `images/`. Không cần cài thêm thư viện.

## Kiểm tra và chỉnh sửa

Trang đã được thử ở các khung 320px, 390px, 768px và 1440px trên trình duyệt. Hai chỗ được chỉnh sau khi chạy thử là chiều cao ảnh bìa ở đầu trang và nhãn nút xem chi tiết.

[Xem quá trình kiểm tra, ảnh trước/sau và giải thích mã](docs/kiem-tra.html).

## Sử dụng AI

Codex hỗ trợ khảo sát, viết HTML/CSS, làm ảnh bìa, kiểm tra giao diện và soạn nội dung. Các phần được hỗ trợ và những chỗ đã chỉnh được ghi trong [AI_USAGE.md](AI_USAGE.md).

## Đường dẫn bài làm

- [Website](https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/)
- [Báo cáo khảo sát](https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/docs/bao-cao.html)
- [GitHub](https://github.com/thanhdat09cpr/ecommerce-ui-improvement-moc)


## Buổi 2 — HTML5 và CSS3 (03/11/2026)

Tiếp tục bản Buổi 1 tại commit `5a2ac17`, tập trung danh sách bốn cuốn sách; giữ nguyên nội dung và ảnh. Không thêm framework hoặc JavaScript.

- Thẻ sách có border, bo góc và padding 20 px cho nội dung.
- Bố cục: 4 cột ở màn hình lớn, 2 cột từ 1000 px trở xuống, 1 cột từ 420 px trở xuống.
- Nút chi tiết có chuyển màu 0,2 giây; giữ focus-visible và hỗ trợ giảm chuyển động.
- Article được đặt tên qua aria-labelledby trỏ đến h3.
- Đã kiểm tra local ở 1366, 768, 390 và 320 px: ảnh tải đủ, không tràn ngang; kiểm tra mở chi tiết bằng bàn phím.

[Báo cáo Buổi 2, ảnh trước–sau và bảy câu hỏi kiến thức](docs/buoi-2.html).
[Nhật ký AI](AI_USAGE.md).

Chạy như Buổi 1: mở index.html hoặc chạy `python3 -m http.server 8000` tại thư mục dự án rồi vào http://localhost:8000. Báo cáo ở docs/buoi-2.html.

**Phần còn cần sinh viên thực hiện:** tự sửa một thay đổi nhỏ, chụp ảnh và giải thích theo hướng dẫn cuối báo cáo. Thao tác Codex đã làm không được ghi thành thao tác tự làm độc lập của sinh viên. Các câu trả lời kiến thức là bản giải thích để học và thực hành.


### Điều chỉnh bổ sung

Theo yêu cầu làm tiếp, Codex đã đổi padding nội dung thẻ từ 16 lên 20 px, chụp ảnh trước–sau và kiểm tra lại bốn kích thước màn hình. Không tràn ngang, ảnh tải đủ, Enter mở được chi tiết. Xem mục 6 của báo cáo. Đây là thay đổi có AI hỗ trợ; không ghi nhận là thao tác độc lập của sinh viên.
