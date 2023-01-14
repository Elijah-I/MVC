import AppController from "controller/app.controller";

class HeaderView {
  render(root: HTMLElement, cb: (state: Record<string, string>) => void) {
    root.innerHTML = "";

    const A = document.createElement("button");
    A.textContent = "route A";
    A.addEventListener("click", () => {
      AppController.route("A", cb);
    });

    const B = document.createElement("button");
    B.textContent = "route B";
    B.addEventListener("click", () => {
      AppController.route("B", cb);
    });

    root.append(A, B);
  }
}

export default new HeaderView();
