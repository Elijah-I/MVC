class AView {
  render(root: HTMLElement) {
    //root.innerHTML = "";

    const contentA = document.createElement("div");
    contentA.textContent = "content A";

    root.replaceChildren(contentA);
  }
}

export default new AView();
