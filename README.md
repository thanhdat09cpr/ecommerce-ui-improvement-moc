# Mộc — E-commerce UI Improvement

Bài tập Chương 1: khảo sát website TMĐT, sử dụng AI có kiểm chứng và cải tiến giao diện HTML/CSS.

## 1. Giới thiệu

Mộc là trang tủ sách mẫu. Cải tiến tập trung vào thẻ sản phẩm: đọc đầy đủ tên, phân biệt giá, mở thông tin ngay trên thẻ, bố cục thích ứng máy tính/điện thoại.

## 2. Website tham khảo

- Fahasa: https://www.fahasa.com/
- Khảo sát ngày 20/10/2026, giờ Việt Nam; phiên chưa đăng nhập, khung nhìn 863 × 842px.
- Đã khảo sát: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm, giỏ rỗng và giỏ có sản phẩm.
- [Báo cáo chi tiết, bảng 5 khu vực và bằng chứng](docs/bao-cao.html).
- Dữ liệu và hành vi có thể thay đổi sau ngày khảo sát.

## 3. Chức năng

- Hiển thị 4 sách mẫu với bìa, tác giả, tên, giá và thao tác mở chi tiết.
- Giá gốc gạch ngang, nhãn giảm giá và số tiền tiết kiệm cho sách có ưu đãi.
- Nút “Xem chi tiết” dùng details/summary, hoạt động không cần JavaScript.
- Điều hướng trong trang, hỗ trợ bàn phím và bố cục responsive.
- Không triển khai tìm kiếm, giỏ hàng, đăng nhập hoặc thanh toán.

## 4. Công nghệ

HTML5, CSS3; SVG tự thiết kế. Không framework, JavaScript hoặc backend; không cần cài thư viện.

## 5. Cách chạy

Giải nén toàn bộ thư mục và mở `index.html` bằng trình duyệt. Giữ nguyên `css/`, `images/` và `docs/`. Các đường dẫn đều tương đối, dùng được trên GitHub Pages.

Hoặc dùng máy chủ cục bộ nếu máy đã có Python:

```sh
python3 -m http.server 8000
```

Mở http://localhost:8000/ . Không cần máy chủ để mở trực tiếp tệp.

## 6. Cải tiến đã thực hiện

Quan sát ở danh mục Fahasa: một số tên dài bị rút gọn và trong ảnh không thấy nút thao tác riêng. Bản mẫu cho xuống dòng toàn bộ tên, có vùng giá nhất quán, nút Xem chi tiết cao tối thiểu 44px; giữ nguyên tắc giá bán nổi bật/giá gốc gạch ngang.

Lưới 4 cột trên 700px; 2 cột ở 351–700px; 1 cột từ 350px trở xuống. Chưa đo tác động đến doanh thu hoặc mức hài lòng của người dùng thật.

## 7. Hỗ trợ từ AI

AI khảo sát bằng trình duyệt, phân tích, viết mã và tài liệu, kiểm tra bản render. Chi tiết tại [AI_USAGE.md](AI_USAGE.md). Đây không phải xác nhận sinh viên đã tự làm hoặc tự kiểm tra. Người học phải chạy, sửa ít nhất một điểm và giải thích phần đã sửa trước khi nộp.

## 8. Dữ liệu minh họa và bằng chứng

Bốn tên sách, tác giả, số trang, mô tả và giá là hư cấu phục vụ giao diện; bìa SVG tự tạo. Không phải danh mục hay giá bán thật của Fahasa. Ảnh khảo sát trong `docs/evidence/` là bằng chứng quan sát, không dùng làm tài sản kinh doanh.

## 9. Kiểm tra và phần người học tiếp tục

Xem [biên bản kiểm tra](docs/kiem-tra.html). Tự kiểm tra lại trên thiết bị, mở/đóng chi tiết bằng Enter/Space, thử 320px và 390px, kiểm tra đường dẫn ảnh. Ghi một thay đổi cá nhân vào AI_USAGE, kèm lý do và ảnh trước/sau. Không đánh dấu hoàn tất khi chưa làm.

## 10. GitHub và Pages

- Repository Public: https://github.com/thanhdat09cpr/ecommerce-ui-improvement-moc
- Website: https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/
- Báo cáo: https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/docs/bao-cao.html

Repository cần Public để giảng viên xem mã. Trang web và báo cáo có thể chạy bằng GitHub Pages. Xem [hướng dẫn xuất bản](docs/xuat-ban.html).
