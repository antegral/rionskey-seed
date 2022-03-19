export default class libUtil {
  splitCopy(
    baseArray: Array<number>,
    baseStartIndex: number,
    targetArray: Array<number>,
    targetStartIndex: number,
    length?: number,
  ): number[] {
    length = length ? length : baseArray.length;
    let result = targetArray;
    for (let i = baseStartIndex; i < baseStartIndex + length; i++)
      result[targetStartIndex++] = baseArray[i];
    return result;
  }

  xor(Array1: number[], Array2: number[], length?: number) {
    length = length ? length : 16;
    let result = new Array<number>(Array1.length);
    for (let i = 0; i < length; i++) {
      result[i] = Array1[i] ^ Array2[i];
    }
    return result;
  }

  endianConversion(params: number[]) {
    for (let i = 0; i < params.length; i++) {
      (params[i] >>> 24) |
        (params[i] << 24) |
        ((params[i] << 8) & 0x00ff0000) |
        ((params[i] >>> 8) & 0x0000ff00);
    }
    return params;
  }

  seedShift(A: number, shift: 0 | 8 | 16 | 24) {
    switch (shift) {
      case 8:
        return 0x000000ff & (A >>> 8);
      case 16:
        return 0x000000ff & (A >>> 16);
      case 24:
        return 0x000000ff & (A >>> 24);
      default:
        return 0x000000ff & A;
    }
  }
}
