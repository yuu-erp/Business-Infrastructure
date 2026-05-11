# XoX SaaS Platform

Hệ sinh thái SaaS đa ứng dụng mạnh mẽ, được xây dựng với kiến trúc Modular Monolith.

## Công nghệ chính

- **Monorepo**: Turborepo, pnpm
- **Frontend**: Next.js (App Router), TailwindCSS, shadcn/ui
- **Backend**: NestJS, Prisma ORM
- **Cơ sở dữ liệu**: PostgreSQL, Redis
- **Công cụ**: ESLint, Prettier, Husky, Commitlint

## Cấu trúc thư mục

- `apps/`: Các ứng dụng Next.js (web, admin, hrm)
- `packages/`: Các thư viện dùng chung (ui, database, auth, v.v.)
- `services/`: Các dịch vụ backend (api)
- `tooling/`: Cấu hình công cụ dùng chung (typescript, eslint, prettier)
- `infra/`: Cấu hình Docker và hạ tầng
- `docs/`: Tài liệu dự án

## Bắt đầu nhanh

```bash
# Cài đặt dependency
pnpm install

# Khởi chạy chế độ phát triển
pnpm dev

# Build toàn bộ dự án
pnpm build
```

## Kiến trúc

Dự án tuân thủ nguyên tắc **Clean Architecture** và **Modular Monolith**, cho phép tách biệt rõ ràng giữa các module nghiệp vụ nhưng vẫn giữ được sự đơn giản trong việc triển khai và phát triển thời gian đầu.
