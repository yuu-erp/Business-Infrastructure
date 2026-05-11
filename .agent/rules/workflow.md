# Quy tắc quy trình làm việc

- **Conventional Commits**: Sử dụng format `type(scope): description`. Các type hợp lệ: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.
- **Monorepo Management**: Sử dụng `pnpm` và `turbo`. Không cài đặt dependency trực tiếp bằng `npm` hoặc `yarn`.
- **Code Quality**: Chạy lint và typecheck trước khi hoàn thành công việc. Luôn sử dụng bộ quy tắc trong `.agent/rules/` làm tiêu chuẩn đối chiếu.
- **Documentation**: Cập nhật `README.md` hoặc các file tài liệu trong `docs/` khi có thay đổi lớn về kiến trúc hoặc quy trình.
