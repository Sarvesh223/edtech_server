import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmsModule } from './modules/cms.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongoDB connection with ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri:
          configService.get<string>('MONGODB_URI') ||
          'mongodb://localhost:27017/edtech-website',   dbName: 'edtechplatform',
      }),
      inject: [ConfigService],
    }),
    // CMS Module
    CmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}