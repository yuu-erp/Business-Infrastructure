# Quy tắc Bảo mật & Phân quyền (RBAC)

## Vai trò Hệ thống (System Roles)
- **SUPER_ADMIN**: Quyền cao nhất, quản lý toàn bộ hệ thống và các Tenant.
- **TENANT_ADMIN**: Quyền quản trị cao nhất trong một Tenant cụ thể.
- **USER**: Người dùng thông thường trong Tenant.

## Quản lý Quyền (Permissions)
- **Format**: `module.resource.action` (ví dụ: `hrm.employee.create`, `billing.invoice.view`).
- **Granularity**: Chia nhỏ quyền tối đa để linh hoạt trong việc gán cho các Role khác nhau.

## Authorization Logic (CASL)
- Sử dụng **CASL Ability** để kiểm tra quyền dựa trên logic nghiệp vụ (ví dụ: "chủ sở hữu được xóa bài viết").
- Luôn định nghĩa logic quyền tại `packages/rbac`.

## Tenant Isolation
- **Strict Isolation**: Không bao giờ truy vấn dữ liệu mà không có điều kiện `tenantId` (trừ Super Admin).
- **Security Check**: Luôn kiểm tra quyền truy cập của User đối với Tenant trước khi thực hiện bất kỳ thao tác nào.

## Authentication
- Sử dụng JWT cho API authentication.
- Luôn hash mật khẩu bằng `bcrypt` hoặc thư viện tương đương.
- Token nên có thời hạn ngắn và sử dụng Refresh Token nếu cần.
