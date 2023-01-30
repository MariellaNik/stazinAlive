import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  window.__JS_APP = app;
  
  // Import statement for eventemitter3
import { EventEmitter } from 'eventemitter3';

// Beat class that extends EventEmitter
class Beat extends EventEmitter {
  constructor() {
    super();

    // Emit Beat.events.BIT every interval
    setInterval(() => {
      this.emit(Beat.events.BIT);
    }, 1000);
  }
}

// Define Beat.events
Beat.events = {
  BIT: 'bit'
};

// Application class
class Application {
  constructor() {
    this._beat = new Beat();
    this._create();

    // Add event listener for Beat.events.BIT
    this._beat.on(Beat.events.BIT, this._createMessage.bind(this));
  }

  // Create method
  _create() {
    // ...
  }

  // Create message method
  _createMessage() {
    // Create a .message for each lyric
    console.log('.message');
  }
}

});
