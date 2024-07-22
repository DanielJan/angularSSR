import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
// import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration()],
};
