import { App } from './app/app';
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { provideServerRendering, ɵSERVER_CONTEXT } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.js';

// Try a simpler approach - just export the bootstrap function directly
export default function (context?: BootstrapContext) {
  return bootstrapApplication(
    App,
    {
      providers: [
        { provide: ɵSERVER_CONTEXT, useValue: 'ssr-analog' },
        provideServerRendering(),
        provideRouter(routes)
      ]
    },
    context
  );
}