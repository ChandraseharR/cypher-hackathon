import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [SharedModule,HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




// import { Module } from '@nestjs/common';
// import { WatchlistController } from './watchlist.controller';
// import { HttpModule } from '@nestjs/common';

// @Module({
//   imports: [HttpModule],
//   controllers: [WatchlistController],
//   providers: [],
// })
// export class WatchlistModule {}