/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Prend une fonction en paramètre
 * et l'execute dans une promise
 * @param fn
 */
const asyncHandler = (fn: any) =>
    function asyncHandlerWrap(...args: any[]) {
        const fnReturn = fn(...args);
        const next = args[args.length - 1];
        return Promise.resolve(fnReturn).catch(next);
    };

export default asyncHandler;