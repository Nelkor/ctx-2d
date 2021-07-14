type CanvasLimits = {
  width: number
  height: number
}

type CreateCtxOptions = {
  resizeCallback?: (ctx: CanvasRenderingContext2D) => void
  limits?: CanvasLimits
}

type CreateCtx = (
  options?: CreateCtxOptions,
  parent?: Element | null,
) => {
  context: CanvasRenderingContext2D
  setParent: (parent: Element | null) => void
}

export declare const createCtx: CreateCtx
