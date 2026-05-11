# Quy tắc Prisma

## Schema Management
- **Centralized Schema**: Schema chính nằm tại `packages/database/prisma/schema.prisma`.
- **Naming Conventions**: 
  - Model: `PascalCase` (ví dụ: `TenantMembership`).
  - Field: `camelCase` (ví dụ: `createdAt`).
  - Table: Tự động map sang `snake_case` nếu cần thiết (sử dụng `@@map`).

## Multi-tenancy
- **Tenant Isolation**: Mọi bảng dữ liệu liên quan đến khách hàng PHẢI có trường `tenantId`.
- **Indexing**: Luôn tạo index cho `tenantId` và các trường hay dùng trong câu lệnh `WHERE`.

## Migrations
- Luôn đặt tên migration có ý nghĩa: `npx prisma migrate dev --name <description>`.
- Kiểm tra file SQL migration trước khi commit nếu có thay đổi quan trọng.

## Query Best Practices
- **Type Safety**: Luôn sử dụng các type được generate từ Prisma Client.
- **Performance**: Sử dụng `select` để chỉ lấy các trường cần thiết, tránh over-fetching.
- **Transactions**: Sử dụng `$transaction` khi cập nhật nhiều bảng liên quan để đảm bảo tính toàn vẹn dữ liệu.
