import bgs from "../assets/bgs";
import { Perferences } from "../redux/features/perferencesSlice";
import changeBackground from "../redux/perferencesActions.ts/changeBackground";

class PerferencesStore {
  public static storage = localStorage;
  private static initialPerferences: Perferences = {
    background: bgs[0],
  };

  private static set(value: Perferences) {
    this.storage.setItem("perferences", JSON.stringify(value));
  }

  public static get(): Perferences {
    if (!this.storage.getItem("perferences")) this.set(this.initialPerferences);
    return JSON.parse(this.storage.getItem("perferences") as string);
  }

  public static changeBackground(perferences: Perferences, background: string) {
    let perfs = changeBackground(perferences, background);
    PerferencesStore.set(perfs);
    return perfs;
  }
}

export default PerferencesStore;
