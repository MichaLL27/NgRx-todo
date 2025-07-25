import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
    )
  ]
};
