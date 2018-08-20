/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { ALayer, LAYER_TYPE } from './layer';

export class VectorLayer extends ALayer {

  static type = LAYER_TYPE.VECTOR;

  constructor(layerDescriptor) {
    super(layerDescriptor);
  }

  static createDescriptor(options) {
    const vectorLayerDescriptor = super.createDescriptor(options);
    vectorLayerDescriptor.type = LAYER_TYPE.VECTOR;
    vectorLayerDescriptor.style = {
      ...vectorLayerDescriptor.style,
      ...this._applyDefaultStyle()
    };
    return vectorLayerDescriptor;
  }

  static _applyDefaultStyle = (() => {
    const defaultColors = ['#e6194b', '#3cb44b', '#ffe119', '#f58231', '#911eb4'];
    let randomNum;
    return () => {
      randomNum = Math.floor((Math.random() * defaultColors.length));
      return {
        color: defaultColors[randomNum]
      };
    };
  })();

}
