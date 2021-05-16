type CanvasLimits = {
  width: number
  height: number
}

type CreateCtxOptions = {
  resizeCallback?(ctx: CanvasRenderingContext2D): void
  limits?: CanvasLimits
}

type CreateCtx = (
  parent: Element | null,
  options?: CreateCtxOptions,
) => CanvasRenderingContext2D

export declare const createCtx: CreateCtx
