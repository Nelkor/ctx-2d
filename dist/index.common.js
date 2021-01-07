/**
 * @type CreateCtx
 */
const createCtx = (parent, options = {}) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.style.width = '100%'
  canvas.style.height = '100%'

  canvas.width = parent.clientWidth
  canvas.height = parent.clientHeight

  const resize = () => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    if (options.resizeCallback) {
      options.resizeCallback(ctx)
    }
  }

  addEventListener('resize', resize)

  parent.appendChild(canvas)

  return ctx
}

module.exports = {
  createCtx,
}
