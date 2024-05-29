export namespace MathUtil {
  export const PI: number = 3.14;
  export function sum(...values: number[]): number {
    let res = 0;
    for (const number of values) {
      res += number;
    }
    return res;
  }
}

export namespace StringUtil {
  export function isPalindrome(str: string): boolean {
    const initial = str.toLowerCase();
    let reversed = '';
    for (let i = initial.length - 1; i >= 0; i--) {
      reversed += initial.charAt(i);
    }
    return reversed === initial;
  }
}
