# Nhật ký sử dụng AI

## Công cụ và mục đích

Công cụ sử dụng là Codex. AI hỗ trợ đọc đề, khảo sát Fahasa, chọn phần giao diện cần cải tiến, viết HTML/CSS, tạo bìa sách và kiểm tra lại trang.

## Các yêu cầu đã dùng

- “check tiếp cái này cho anh nhé” — kèm liên kết đề bài.
- “anh cần em nắm intent rồi làm cái này cho anh”.
- “em giúp anh làm luôn đi nhé” — làm tiếp phần kiểm tra và chỉnh sửa.
- Yêu cầu viết tự nhiên như bài thực hành của sinh viên, ít chú thích trong code và tránh diễn đạt quá kỹ thuật.

Từ đề bài, AI triển khai hướng khảo sát Fahasa rồi làm một trang tủ sách gồm bốn sản phẩm, dùng HTML và CSS riêng. Không sử dụng thêm dịch vụ AI khác.

## Kết quả hỗ trợ

AI tạo trang Mộc, bốn bìa sách, bảng khảo sát năm khu vực và các tệp hướng dẫn. Tên sách, tác giả và giá trong trang là dữ liệu mẫu.

Các nhận xét về Fahasa được đối chiếu qua trang đang chạy và ảnh chụp. Chẳng hạn, giỏ có sách nhưng tổng 0đ là do sản phẩm chưa được chọn; sau khi chọn, tổng hiện đúng 4.000đ, nên không ghi đó là lỗi tính tiền.

## Những chỗ chỉnh sau khi chạy thử

1. **Ảnh bìa ở đầu trang:** ảnh bị kéo dài và tràn ở khung nhỏ. Thêm `height: auto` để chiều cao thay đổi theo chiều rộng.
2. **Nút chi tiết:** khi nội dung đã mở, nút vẫn ghi “Xem chi tiết”. Đổi thành “Thu gọn” ở trạng thái mở và đổi chiều mũi tên. Cách này giúp dễ biết bấm lần nữa sẽ đóng phần thông tin.
3. **Cách viết:** rút ngắn các lời nhắc trên giao diện và báo cáo; phần dùng AI được tập trung vào nhật ký này.

Các thay đổi và kiểm tra trên được thực hiện với sự hỗ trợ của AI. [Ảnh trước/sau và kết quả kiểm tra](docs/kiem-tra.html).

## Những phần mã chính

- `article`: gom thông tin của một sách.
- `img` và `alt`: hiển thị bìa, kèm tên thay thế cho ảnh.
- `del`: gạch giá gốc để phân biệt với giá đang bán.
- Grid: chia danh sách thành các cột.
- Media query: đổi số cột khi màn hình nhỏ hơn.
- `details` và `summary`: mở/đóng thông tin sách mà không cần JavaScript.
- `details[open]`: chọn phần chi tiết đang mở để đổi nhãn nút.

Bản này đã được kiểm tra bằng trình duyệt trên máy tính và các khung màn hình nhỏ; chưa thử trên điện thoại thật.
