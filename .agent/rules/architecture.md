# Quy tắc kiến trúc

- **Modular Monolith**: Giữ ranh giới rõ ràng giữa các module nghiệp vụ trong NestJS. Tránh dependency vòng (circular dependencies).
- **Multi-tenant SaaS**: Luôn cân nhắc việc cô lập dữ liệu bằng `tenant_id`. Tất cả các bảng nghiệp vụ mới phải có `tenantId`.
- **Clean Architecture**: Tách biệt logic nghiệp vụ khỏi infrastructure và framework. Sử dụng **Zod** cho validation và **CASL** cho authorization.
- **Strict Typing**: Luôn sử dụng TypeScript ở chế độ strict. Không sử dụng `any` trừ khi thực sự cần thiết và phải có giải thích.
- **Shared Packages**: Ưu tiên đưa các logic dùng chung vào `packages/` thay vì copy-paste giữa các app.
