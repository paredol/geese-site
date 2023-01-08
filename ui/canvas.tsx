"use client";

import React, { useEffect } from "react";
import { Application, Assets, Sprite } from "pixi.js";
import image from "../public/frame.png";

export default function Canvas() {
  // Use the useEffect hook to initialize the PIXI application when the component is mounted
  useEffect(() => {
    const app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: 1,
      backgroundColor: "transparent",
      backgroundAlpha: 0,
      width: 400,
      height: 400,
    });

    (async () => {
      const texture = await Assets.load(image);
      const frame = new Sprite(texture);
      frame.width = texture.width;
      frame.height = texture.height;

      app.stage.addChild(frame);
    })();
  }, []);

  return <canvas id="pixi-canvas"></canvas>;
}