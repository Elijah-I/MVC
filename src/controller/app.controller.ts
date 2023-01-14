import AppModel from "model/app.model";

class AppController {
  route(path: string, cb: (state: Record<string, string>) => void) {
    AppModel.route(path, cb);
  }
}

export default new AppController();
