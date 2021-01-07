type CreateCtxOptions = {
  resizeCallback?(ctx: CanvasRenderingContext2D): void
}

type CreateCtx = (
  parent: HTMLElement,
  options?: CreateCtxOptions,
) => CanvasRenderingContext2D

export declare const createCtx: CreateCtx
