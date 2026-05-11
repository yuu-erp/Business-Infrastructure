# Quy tắc Next.js

## Kiến trúc & Cấu trúc Thư mục
- **App Router**: Luôn sử dụng thư mục `src/app`.
- **Feature-based Structure**: Ưu tiên tổ chức code theo tính năng trong `src/modules`. Ví dụ: `src/modules/auth`, `src/modules/tenant`.
- **Co-location**: Để `loading.tsx`, `error.tsx`, và các components liên quan gần nhất với `page.tsx`.

## Components & Rendering
- **Server Components (RSC)**: Luôn ưu tiên dùng Server Components mặc định.
- **Client Components**: Chỉ sử dụng `'use client'` khi thực sự cần interactivity (useState, useEffect) hoặc browser APIs.
- **Shared Components**: Sử dụng các components từ `packages/ui` (shadcn/ui).

## Styling
- **Tailwind CSS**: Luôn sử dụng Tailwind utility classes.
- **Design System**: Tuân thủ bảng màu và spacing đã định nghĩa trong `tailwind.config.js`.

## Data Fetching
- **Server-side**: Fetch dữ liệu trực tiếp trong Server Components bằng `async/await`.
- **Caching**: Sử dụng `revalidatePath` hoặc `revalidateTag` để làm mới dữ liệu.

## Tối ưu hóa
- Sử dụng `next/image` cho hình ảnh.
- Sử dụng `next/font` cho typography.
- Luôn có metadata đầy đủ cho SEO.
