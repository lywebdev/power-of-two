/**
 *  !Condition:
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 * (-231 <= n <= 231 - 1)
 *
 */

const isPowerOfTwo = (number) => {
    for (let i = 0; i < 31; i++) {
        let currentDegree = Math.pow(2, i);

        if (currentDegree === n) {
            return true;
        }
    }

    return false;
}