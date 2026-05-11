import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { PrismaService } from "@/infrastructure/database/prisma.service";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantSlug = req.headers["x-tenant-slug"] as string;

    if (!tenantSlug) {
      return next(); // Có thể cho phép một số request không cần tenant (ví dụ: login hệ thống)
    }

    const tenant = await this.prisma.tenant.findUnique({
      where: { slug: tenantSlug },
    });

    if (!tenant) {
      throw new BadRequestException("Tenant không hợp lệ");
    }

    // Gắn tenant context vào request
    (req as any).tenant = tenant;
    next();
  }
}
