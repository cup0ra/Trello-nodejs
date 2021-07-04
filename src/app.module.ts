import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { loggers } from './middleware/logging';
import { UsersController } from './users/controller/users.controller';
import { TasksController } from './tasks/controller/tasks.controller';
import { BoardsController } from './boards/controller/boards.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    BoardsModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggers).forRoutes(UsersController, TasksController, BoardsController);
  }
}
