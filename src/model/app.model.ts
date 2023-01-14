import { Publisher } from "utils/observer";

class AppModel extends Publisher {
  protected state = {
    path: ""
  };

  route(path: string, cb: (state: Record<string, string>) => void) {
    this.state.path = path;
    cb(this.state);
    //this.notify();
  }
}

export default new AppModel();
