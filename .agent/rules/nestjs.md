# Quy tắc NestJS

## Cấu trúc Module
- **Modular Monolith**: Mỗi module nghiệp vụ phải độc lập. Giao tiếp giữa các module nên thông qua Service hoặc Events.
- **Thư mục chuẩn**: Mỗi module nên có cấu trúc:
  - `controllers/`: Xử lý HTTP requests.
  - `services/`: Chứa logic nghiệp vụ chính.
  - `dto/`: Định nghĩa Data Transfer Objects (sử dụng Zod hoặc class-validator).
  - `entities/` hoặc `models/`: Định nghĩa cấu trúc dữ liệu.

## Dependency Injection
- Luôn sử dụng Constructor Injection.
- Tránh sử dụng `@Inject()` trừ khi thực sự cần thiết (ví dụ: inject hằng số hoặc custom providers).

## Xử lý lỗi
- Sử dụng `Built-in Exceptions` của NestJS (ví dụ: `NotFoundException`, `BadRequestException`).
- Luôn có Global Exception Filter để đảm bảo format lỗi API đồng nhất.

## Validation & Transformation
- Sử dụng `ValidationPipe` toàn cục.
- Luôn sử dụng DTO để validate input.

## Database
- Sử dụng `PrismaService` tập trung.
- Tránh viết logic DB phức tạp trong Controller.
