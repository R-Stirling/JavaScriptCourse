class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }
  // this is defined by where the method is called, not by where it is defined - so it would default to being the button in this event listener.
  //.bind(this) returns a new function locked to call the original one with 'this' set to the specific instance (app)

  //   this.getServerName grabs a reference to the method (unbound, still just a plain function at this point).
  // .bind(this) wraps it in a new function with this locked to the App instance.
  // That bound function is what actually gets registered as the click handler.
  // When the button is clicked, the bound function runs getServerName with 'this' forced to app, so this.serverName correctly resolves to 'localhost'.

  getServerName() {
    console.log(this);
    console.log(this.serverName);
  }
}

const app = new App();

// if you ran it in the global scope, 'this' would refer to the app anyway - only because it's called in an event listener in the function does it need bind() to ensure it refers to the App instance rather than the event object (where it's called from).
// app.getServerName();
