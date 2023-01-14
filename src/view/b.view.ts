class BView {
  render(root: HTMLElement) {
    //root.innerHTML = "";

    const contentB = document.createElement("div");
    contentB.textContent = "content B";

    root.replaceChildren(contentB);
  }
}

export default new BView();
