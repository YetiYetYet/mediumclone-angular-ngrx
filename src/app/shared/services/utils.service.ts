import {Injectable} from "@angular/core";

@Injectable()
export class UtilsService {
  constructor() {
  }

  range(start: number, end: number): number[] {
    if (start > end) {
      [end, start] = [start, end]
    }
    return new Array(end - start + 1).fill('').map((_, i) => start + i)
  }
}
