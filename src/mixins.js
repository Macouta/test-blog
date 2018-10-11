import { WebGLRenderer, CanvasRenderer } from 'three-full'

let WebGL = {
  methods: {
    rightRenderer: (parameters) => {
      let canvas = document.createElement('canvas')

      let gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      return gl && gl instanceof WebGLRenderingContext
        ? new WebGLRenderer(parameters)
        : new CanvasRenderer(parameters)
    }
  }
}

export { WebGL }
