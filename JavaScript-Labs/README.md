# JavaScript Labs

Nguyễn Thành Đạt – MSSV 31241026984  

## Nội dung
Bài làm tiếp tục repository cũ, sử dụng HTML, CSS và ảnh trong ba gói Lab do giảng viên cung cấp. Mã JavaScript hoàn thành các bước thực hành, giữ bản cuối khi tài liệu yêu cầu sửa cùng một đoạn mã nhiều lần.

## Cấu trúc
- `index.html`: thông tin sinh viên, ảnh đại diện, giới thiệu, bài học và tự đánh giá.
- `Lab08`: 11 Exercise JavaScript cơ bản.
- `Lab09`: 8 Exercise DOM, sự kiện và form.
- `Lab10`: 10 Exercise jQuery.
- Mỗi Exercise có một trang HTML; mã JavaScript ngoài nằm trong thư mục `js`. CSS, ảnh và cờ giữ theo bộ mẫu.

## Xem bài và triển khai
Mở [GitHub Pages](https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/JavaScript-Labs/), chọn Lab rồi chọn Exercise.
Tại máy, mở thư mục repository bằng VS Code và chạy Live Server. Bài GET cần chạy qua HTTP, không mở bằng file://.
GitHub Settings → Pages → Deploy from a branch → main → / (root) → Save. Sau khi build xong, truy cập đường dẫn JavaScript-Labs/ ở trên.

## Các bài thực hành
- Exercise 8.1: Enabling and Disabling JavaScript.
- Exercise 8.2: Embedded JavaScript.
- Exercise 8.3: External JavaScript.
- Exercise 8.4: Using noscript.
- Exercise 8.5: Using the Browser Console.
- Exercise 8.6: Built-in JavaScript Objects.
- Exercise 8.7: Arrays.
- Exercise 8.8: JavaScript Functions.
- Exercise 8.9: Functions as Objects.
- Exercise 8.10: Creating JavaScript Objects.
- Exercise 8.11: Arrays of Objects.
- Exercise 9.1: Basic DOM Selection.
- Exercise 9.2: DOM Family Relations.
- Exercise 9.3: Modifying the DOM.
- Exercise 9.4: Simple Event Handling.
- Exercise 9.5: Responding to Load Events.
- Exercise 9.6: Debugging Events.
- Exercise 9.7: Working with Forms.
- Exercise 9.8: Form Validation.
- Exercise 10.1: Set Up jQuery.
- Exercise 10.2: Basic Selectors.
- Exercise 10.3: Advanced Selectors.
- Exercise 10.4: jQuery Listeners.
- Exercise 10.5: Inserting DOM Elements.
- Exercise 10.6: Simple jQuery Animation.
- Exercise 10.7: More jQuery Animation.
- Exercise 10.8: Complex Animations.
- Exercise 10.9: GET Requests.
- Exercise 10.10: jqXHR Handling.

## Ghi chú về dịch vụ cũ
- Exercise 8.1 giữ liên kết trang PHP trong đề. Tên miền examples.funwebdev.com không truy cập được khi kiểm tra; trang cục bộ có script/noscript để kiểm tra bật và tắt JavaScript. Đây là phương án thay thế cho liên kết hỏng.
- Exercise 8.2, 9.5 và 9.6 sử dụng alert đúng thao tác trong tài liệu. Exercise 8.5 xem kết quả bằng Console; Exercise 9.6 đặt breakpoint và Watch trong Developer Tools.
- Exercise 10.9 và 10.10 gọi trực tiếp dịch vụ HTTP gốc khi chạy bằng Live Server. Đã nhận được 53 thành phố. Trên GitHub Pages HTTPS, trình duyệt chặn HTTP nên GET dùng file cities.json lưu nguyên phản hồi từ dịch vụ gốc ngày 17/11/2026. Đây là bản lưu dữ liệu thật, không phải dữ liệu cập nhật trực tiếp trên Pages. Nguồn được ghi trên trang.
- jQuery dùng CDN theo đề, có bản cục bộ dự phòng. Bootstrap và Font Awesome phục vụ giao diện mẫu, không thêm framework ứng dụng.

AI hỗ trợ mã nguồn, kiểm thử và báo cáo. Sinh viên cần đọc lại, chạy thử và sửa phần tự đánh giá theo trải nghiệm thực tế trước khi nộp.
