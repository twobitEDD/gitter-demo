import Gitter from 'gitter';

const container = document.getElementById('container');

const gitter = window.gitter = new Gitter({ 
  canvas: {
    container
  } 
});

const modeling = gitter.get('modeling');
const gitterElementFactory = gitter.get('gitterElementFactory');
const canvas = gitter.get('canvas');
const selection = gitter.get('selection');
const gitterConfig = gitter.get('gitterConfig');
const keyboard = gitter.get('keyboard');

// inital diagram
const rootShape = gitterElementFactory.createRoot();

canvas.setRootElement(rootShape);

const x = Math.floor(document.documentElement.clientWidth / 2) - 15;
const y = Math.floor(document.documentElement.clientHeight / 2) - 15;

const emitter = gitterElementFactory.createEmitter({
  id: 'Emitter_1',
  type: 'gitter:Emitter',
  x: x - gitterConfig.propertiesPanelWidth,
  y,
  width: gitterConfig.shapeSize,
  height: gitterConfig.shapeSize
});

canvas.addShape(emitter, rootShape);

keyboard.bind(document);

selection.select(emitter);

window.gitter = gitter;
