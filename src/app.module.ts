import { Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';
import { PermissionsGuard } from './permissions.guard';

@Module({
  imports: [ItemsModule, AuthzModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: PermissionsGuard,
    // },
  ],
})
export class AppModule {}
