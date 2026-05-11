import { Button } from "@xox/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Chào mừng đến với XoX SaaS Platform</h1>
        <p className="text-xl mb-8">Hệ sinh thái đa ứng dụng cho doanh nghiệp</p>
        <div className="flex gap-4">
          <Button className="bg-primary text-white px-6 py-2">Bắt đầu ngay</Button>
          <Button className="bg-secondary px-6 py-2">Tìm hiểu thêm</Button>
        </div>
      </div>
    </main>
  );
}
