# CSS nâng cao – Lab 07

Nguyễn Thành Đạt – MSSV 31241026984

## Mục tiêu
Thực hành 19 Exercise của Lab 07 theo Fundamentals of Web Development, 2nd Edition: bố cục, responsive, hiệu ứng và Bootstrap.

## Cách xem
[Trang chủ GitHub Pages](https://thanhdat09cpr.github.io/ecommerce-ui-improvement-moc/CSS-NangCao/). Chọn Exercise trên trang chủ. Mở trực tiếp index.html hoặc dùng Live Server để xem ở máy.

## Cấu trúc
- `index.html`, `style.css`, `images/avatar.png`: trang giới thiệu cá nhân.
- `Lab07/lab07-exerciseNN.html` và `.css`: HTML/CSS của từng Exercise.
- `Lab07/lab07-exercise12-desktop.css`, `-mobile.css`: giao diện theo kích thước.
- `Lab07/bootstrap/`, `Lab07/images/`: thư viện và toàn bộ ảnh của bộ mẫu.
- Exercise 7.13 dùng tiếp file 7.12; hai liên kết cùng mở trang đó.

## Các nhóm Exercise
- 7.1–7.4: display, relative/absolute positioning và z-index.
- 7.5–7.9: float, clear và ảnh chồng lớp.
- 7.10–7.13: bố cục nhiều cột, media queries và viewport.
- 7.14–7.18: transform, transition, filter và animation.
- 7.19: Bootstrap grid và các thành phần giao diện.

## Triển khai
Dùng repository hiện có. Settings → Pages → Deploy from a branch → main → / (root). Đường dẫn bài là `/CSS-NangCao/`.

## Nguồn và ghi chú
Bộ mã khởi tạo và Lab07.pdf: https://github.com/funwebdev-2nd-ed/ch07-lab-start (Randy Connolly, Ricardo Hoar). Giữ các ảnh và thư viện gốc.
Một số bài cố ý có ảnh chồng lên chữ hoặc bố cục chưa responsive để quan sát CSS theo tài liệu. Trang chủ, bài 7.12–7.13 và Bootstrap được kiểm tra riêng trên điện thoại.
Đã sửa liên kết CSS của bài 7.6 và 7.7 từ lab05 sang đúng lab07. Đã sửa lỗi cú pháp sẵn có: `1.5 em`, khai báo font-family lồng sai, `sns-serif`, thẻ đóng h2 và filter hue-rotate thiếu tên thuộc tính. Font ở bố cục được đặt một lần trên body để tránh bị thu nhỏ lặp theo từng cấp. Caption contrast được sửa khớp giá trị 160% trong hướng dẫn.
Nút View/Cart trong bài Bootstrap chỉ minh họa giao diện theo Lab.
AI hỗ trợ thực hiện và kiểm tra bài. Phần tự đánh giá là bản nháp để sinh viên đọc lại và chỉnh theo trải nghiệm thực tế.

## Kiểm tra
Đã mở 18 trang cho 19 Exercise; mọi ảnh và liên kết file cục bộ tải được. Trang chủ, 7.12–7.13 và 7.19 không tràn ngang ở 390px. Menu đổi tại 480/481px. Đã thử float khi thu hẹp cửa sổ, các bước z-index và transform, hover của transition/filter và hai animation.
