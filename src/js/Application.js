import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
      BIT: "bit",
    };
  }

  constructor() {
    super();

    this._beat = new Beat();
    this._create();

    this._beat.on(Beat.events.BIT, this._createMessage.bind(this));

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    this._lyrics = lyrics;
    this._count = 0;

    this.emit(Application.events.READY);
  }

  _create() {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = this._lyrics[this._count];

    document.querySelector(".main").appendChild(message);
  }

  _createMessage() {
    this._count = (this._count + 1) % this._lyrics.length;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = this._lyrics[this._count];

    document.querySelector(".main").appendChild(message);
  }
}
