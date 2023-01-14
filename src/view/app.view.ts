import HeaderView from "./header.view";
//  import AppModel from "model/app.model";
import { Subscriber } from "utils/observer";
import AView from "./a.view";
import BView from "./b.view";

interface IState {
  struncture: Record<string, HTMLElement>;
}

class AppView extends Subscriber {
  private state: IState = {
    struncture: {}
  };

  init() {
    const [header, main] = this.createStructure();

    this.state.struncture = {
      header,
      main
    };

    this.render();
    this.subscribe();
  }

  createStructure() {
    const header = document.createElement("header");
    header.classList.add("header");

    const main = document.createElement("main");
    main.classList.add("main");

    const root = document.querySelector("#root");

    if (root) {
      root.append(header, main);
    }

    return [header, main];
  }

  update(state: Record<string, string>) {
    switch (state.path) {
      case "A":
        AView.render(this.state.struncture.main);
        break;

      case "B":
        BView.render(this.state.struncture.main);
        break;

      default:
        console.log("404");
        break;
    }
  }

  subscribe() {
    //AppModel.subscribe(this);
  }

  render() {
    HeaderView.render(
      this.state.struncture.header,
      (state: Record<string, string>) => this.update(state)
    );
    AView.render(this.state.struncture.main);
  }
}

export default new AppView();
