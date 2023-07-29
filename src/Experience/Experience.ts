import * as kokomi from "kokomi.js";

import World from "./World/World";

import Debug from "./Debug";

import { resources } from "./resources";

export default class Experience extends kokomi.Base {
  world: World;
  debug: Debug;
  am: kokomi.AssetManager;
  constructor(sel = "#sketch") {
    super(sel);

    (window as any).experience = this;

    this.debug = new Debug();

    this.am = new kokomi.AssetManager(this, resources);

    this.camera.position.set(0, 0, 5);
    new kokomi.OrbitControls(this);

    this.world = new World(this);
  }
}
