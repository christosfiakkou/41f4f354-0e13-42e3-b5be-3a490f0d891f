/**
 * AppModule
 * ---------
 * The root module of the Angular application.
 * Declares the root AppComponent and sets up global imports.
 *
 * Includes:
 *   - BrowserModule: Required for running the app in the browser
 *   - BrowserAnimationsModule: Enables Angular Material animations
 *   - AppRoutingModule: Routing config for the main application
 *   - SharedModule: Includes reusable UI like HeaderComponent
 *
 * Bootstrap:
 *   - AppComponent: The top-level component that hosts the router outlet
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
