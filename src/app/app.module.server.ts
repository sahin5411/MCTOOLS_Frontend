import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

@NgModule({
  imports: [
    ServerModule
  ],
  providers: [
    // Add any server-specific providers here if needed
  ]
})
export class AppServerModule {}