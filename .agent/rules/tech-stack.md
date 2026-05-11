# Quy tắc công nghệ

- **Frontend**: Sử dụng Next.js App Router, TailwindCSS, shadcn/ui. Tuân thủ kiến trúc feature-based trong `src/modules`.
- **Backend**: Sử dụng NestJS. Cấu trúc thư mục phải bao gồm `core`, `infrastructure`, và `modules`.
- **Database**: Sử dụng Prisma. Schema phải được tập trung tại `packages/database`.
- **UI Components**: Tất cả UI components dùng chung phải nằm trong `packages/ui`.
