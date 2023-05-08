import { Assets } from '@pixi/assets'
import { Renderer as PixiRenderer, Texture } from '@pixi/core'
import { NineSlicePlane } from '@pixi/mesh-extras'
import { Sprite } from '@pixi/sprite'
import '@pixi/spritesheet'

const canvas = document.createElement('canvas')
canvas.style.position = 'absolute'
canvas.style.top = '0'
canvas.style.left = '0'

document.body.appendChild(canvas)

const rendererInstance = new PixiRenderer({ view: canvas, antialias: true, backgroundColor: 0x000000 })
const stage = new Sprite()

function render() {
    rendererInstance.render(stage)
    requestAnimationFrame(render)
}

Assets.load('ninesclice.json').then(() => {
    const nineSlicePlace = new NineSlicePlane(Texture.from('button'), 40, 50, 40, 25)
    nineSlicePlace.width = 500
    stage.addChild(nineSlicePlace)
})

render()
