type State = Record<string, string>;

export abstract class Subscriber {
  abstract update(state: State): void;
}

export abstract class Publisher {
  protected abstract state: State;

  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    if (this.subscribers.includes(subscriber)) return;
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    const subIndex = this.subscribers.indexOf(subscriber);
    if (subIndex >= 0) this.subscribers.splice(subIndex, 1);
  }

  notify(): void {
    this.subscribers.forEach((subscriber) => subscriber.update(this.state));
  }
}
