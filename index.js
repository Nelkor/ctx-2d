/**
 * @type CreateCtx
 */
export const createCtx = (options = {}, parent = null) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!options.limits) {
    canvas.style.width = '100%'
    canvas.style.height = '100%'
  }

  const aspectRatio = options.limits
    ? options.limits.width / options.limits.height
    : null

  const setParent = parent => {
    const resize = () => {
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
  
      if (options.resizeCallback) {
        options.resizeCallback(context)
      }
    }

    addEventListener('resize', resize)

    requestAnimationFrame(resize)

    parent.appendChild(canvas)
  }

  if (parent) {
    setParent(parent)
  }

  return { context, setParent }
}
