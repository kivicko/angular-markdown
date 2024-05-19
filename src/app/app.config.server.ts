import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideMarkdown } from 'ngx-markdown';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideMarkdown()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
