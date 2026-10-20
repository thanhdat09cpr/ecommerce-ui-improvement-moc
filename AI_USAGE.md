# AI Usage Log

## 1. Công cụ AI

Codex trong ứng dụng desktop. AI đọc đề PDF, dùng trình duyệt kiểm tra Fahasa, tạo mã HTML/CSS và bìa SVG, viết báo cáo và kiểm tra bản chạy. Không dùng thêm tài khoản/công cụ AI của sinh viên.

## 2. Mục đích sử dụng

Phân tích yêu cầu bài tập, khảo sát có bằng chứng, chọn cải tiến, tạo giao diện, giải thích mã và rà lỗi.

## 3. Prompt / yêu cầu thực tế

Các yêu cầu trực tiếp từ người dùng trong phiên:

1. Gửi liên kết PDF và yêu cầu: “check tiếp cái này cho anh nhé”.
2. Sau khi xem phân tích đề, yêu cầu: “anh cần em nắm intent rồi làm cái này cho anh”.

AI diễn giải phạm vi là thực hiện bài tập theo PDF: khảo sát 5 khu vực Fahasa, làm 1 trang HTML/CSS có 4 sản phẩm, CSS riêng, chuẩn bị README/nhật ký AI, GitHub và Pages. Đây là brief do AI tự diễn giải từ đề; không phải một prompt dài do người dùng nhập và không phải bản ghi của một cuộc trao đổi khác.

Trình tự AI thực hiện: đọc đề → mở website thật → ghi quan sát/ảnh → chọn vấn đề tên sản phẩm bị rút gọn → đề xuất bố cục → tạo mã → kiểm tra bản render → sửa lỗi nếu phát hiện → chuẩn bị hồ sơ.

## 4. Kết quả AI đề xuất

Trang “Mộc” có bốn thẻ sách, tên đầy đủ, giá bán/giá gốc/giảm giá, thao tác mở chi tiết dùng details/summary. Bìa, tên sách và giá được tự tạo để tránh dùng tài sản sản phẩm từ website tham khảo.

## 5. Kiểm tra, điều chỉnh và nhận xét không sử dụng

- Kiểm chứng tìm kiếm bằng truy vấn “kỹ năng sống”; lưu ảnh kết quả thay vì suy luận chỉ từ URL.
- Giỏ có sản phẩm nhưng tổng 0đ khi chưa chọn checkbox. AI chọn sản phẩm và thấy tổng 4.000đ, do đó không ghi nhận đây là lỗi tính tiền.
- Có bộ lọc/sắp xếp trên danh mục nhưng chưa thử chúng: chỉ ghi có thành phần, không khẳng định lọc đúng/sai.
- Chưa khảo sát Fahasa trên điện thoại vật lý: không gọi giao diện gốc là lỗi mobile.
- Không kết luận thiết kế mới tăng chuyển đổi hoặc bán hàng.
- Kiểm tra giao diện do AI thực hiện được ghi ở docs/kiem-tra.html; không quy thành phần tự kiểm tra của người học.
- AI phát hiện ảnh hero có chiều cao cố định làm tràn khung nhỏ; thêm height:auto cho .hero-book, đo lại scrollWidth bằng clientWidth. Đây là chỉnh sửa của AI, không phải chỉnh sửa cá nhân của sinh viên.

## 6. Các phần mã cần hiểu và có thể giải thích sau khi học

- `article.product`: nhóm dữ liệu của từng sản phẩm.
- `img` + `alt`: ảnh bìa và tên thay thế khi không xem được ảnh.
- `del`: biểu diễn giá cũ; strong nhấn giá hiện tại.
- `.product-grid` + `grid-template-columns`: chia số cột; minmax(0, 1fr) giúp cột co theo vùng chứa.
- `@media`: đổi lưới theo chiều rộng; không ẩn hoặc cắt tên sách.
- `details/summary`: nội dung mở/đóng có sẵn trong trình duyệt, không cần JavaScript.
- `:focus-visible`: cho người dùng bàn phím biết đang ở liên kết/nút nào.
- Đường dẫn tương đối: giữ ảnh/CSS hoạt động khi chạy từ thư mục con trên GitHub Pages.

## 7. Phần người học tự xác nhận — chưa thực hiện

- Tự khảo sát lại website: CHƯA XÁC NHẬN.
- Tự chạy bản mẫu trên máy tính/điện thoại: CHƯA XÁC NHẬN.
- Một vấn đề tự phát hiện: CHƯA GHI.
- Chỉnh sửa cá nhân: CHƯA GHI.
- Lý do và dòng mã đã sửa: CHƯA GHI.
- Ảnh trước/sau và kiểm tra lại: CHƯA GHI.
- Tự giải thích mã bằng lời của mình: CHƯA XÁC NHẬN.

Những mục này để người học điền sau khi thực hiện. Không dùng nguyên báo cáo AI làm bằng chứng đã tự hoàn thành các yêu cầu cá nhân trong đề.
