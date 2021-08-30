import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { PrismaReadOnlyService } from './services';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: PrismaReadOnlyService,
      useFactory: (config: ConfigService) => {
        const readOnlyDbUrl = config.get('READONLY_DATABASE_URL');

        return new PrismaService({
          datasources: {
            db: {
              url: readOnlyDbUrl,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [PrismaService, PrismaReadOnlyService],
})
export class PrismaModule {}
