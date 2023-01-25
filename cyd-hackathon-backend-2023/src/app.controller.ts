// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('/')
//   async getHello(): Promise<string> {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get, Param } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';

@Controller('balances')
export class BalancesController {
  constructor(private httpService: HttpService) {}

  @Get(':address')
  getBalances(@Param('address') address: string): Observable<any> {
    const url = 'https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?key=ckey_5e351cddf1284d22ae113a863fd';
    return this.httpService.get(url);
  }
}


// import { Controller, Get, HttpService } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Controller('watchlist')
// export class WatchlistController {
//   constructor(private httpService: HttpService) {}

//   @Get('masterlist')
//   getMasterlist(): Observable<any> {
//     const url = 'https://api.coingecko.com/api/v3/coins/list';
//     return this.httpService.get(url);
//   }

//   @Post()
//   createWatchlist(@Body() name: string): any {
//     if (!/^[a-zA-Z0-9]{5,20}$/.test(name)) {
//       throw new BadRequestException('Invalid name');
//     }
//     const watchlist = {
//       id: uuid(),
//       name,
//       tokens: [],
//     };
//     return watchlist;
//   }

//   @Patch()
//   addTokens(@Body() tokensToBeAdded: string[]): any {
//     // Validate tokens against master coin list
//     // Add tokens to the watchlist
//     // Return the updated watchlist
//   }

//   @Delete()
//   deleteTokens(@Body() tokensToBeDeleted: string[]): any {
//     // Delete tokens from the watchlist
//     // Return the updated watchlist
//   }

//   @Get(':id')
//   getWatchlist(@Param('id') id: string): any {
//     // Retrieve the watchlist with the given id and return its details
//   }
// }