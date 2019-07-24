class Random {
  /**
   *
   * @param {*} min
   * @param {*} max
   * @param {*} inclusive
   */
  static randomInt(min, max, inclusive = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + inclusive)) + min;
  }

  /**
   *
   */
  static randomHexColor() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  }
  /**
   *
   * @param {Array} array
   */
  static randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export default Random;
