import * as kokomi from "kokomi.js";
import * as THREE from "three";

import type Experience from "../Experience";

import TestObject from "./TestObject";

export default class World extends kokomi.Component {
  declare base: Experience;
  testObject: TestObject | null;
  constructor(base: Experience) {
    super(base);

    this.testObject = null;

    this.base.am.on("ready", () => {
      document.querySelector(".loader-screen")?.classList.add("hollow");

      const skybox = this.base.am.items["skybox"];
      skybox.mapping = THREE.EquirectangularReflectionMapping;
      // this.base.scene.background = skybox;

      this.testObject = new TestObject(this.base);
      this.testObject.addExisting();
    });
  }
}
