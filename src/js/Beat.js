export default class Beat {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();
    setInterval(() => {
      console.log("bit");
      this.emit(Beat.events.BIT);
    }, 600);
  }
}
