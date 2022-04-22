/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ApiService } from './services/api.service';
import { Onlinecheckcashingv1chequesService } from './services/onlinecheckcashingv-1cheques.service';
import { Onlinecheckcashingv1commandesadminsService } from './services/onlinecheckcashingv-1commandesadmins.service';
import { Onlinecheckcashingv1commandesclientsService } from './services/onlinecheckcashingv-1commandesclients.service';
import { Onlinecheckcashingv1mvtsldService } from './services/onlinecheckcashingv-1mvtsld.service';
import { Onlinecheckcashingv1photosService } from './services/onlinecheckcashingv-1photos.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ApiService,
    Onlinecheckcashingv1chequesService,
    Onlinecheckcashingv1commandesadminsService,
    Onlinecheckcashingv1commandesclientsService,
    Onlinecheckcashingv1mvtsldService,
    Onlinecheckcashingv1photosService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
