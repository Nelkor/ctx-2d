/**
 * @type CreateCtx
 */
const createCtx = (parent, options = {}) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!options.limits) {
    canvas.style.width = '100%'
    canvas.style.height = '100%'
  }

  const aspectRatio = options.limits
    ? options.limits.width / options.limits.height
    : null

  const setResolution = () => {
    const width = parent.clientWidth
    const height = parent.clientHeight

    if (aspectRatio) {
      if (width / height < aspectRatio) {
        canvas.width = Math.min(width, options.limits.width)
        canvas.height = canvas.width / aspectRatio
      } else {
        canvas.height = Math.min(height, options.limits.height)
        canvas.width = canvas.height * aspectRatio
      }
    } else {
      canvas.width = width
      canvas.height = height
    }
  }

  const resize = () => {
    setResolution()

    if (options.resizeCallback) {
      options.resizeCallback(ctx)
    }
  }

  resize()

  addEventListener('resize', resize)

  parent.appendChild(canvas)

  return ctx
}

module.exports = {
  createCtx,
}
