const unitConversion = {
  totalGrossOz: function(itemWeights) {
    return itemWeights.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  },
  totalGrossLbs: function(itemWeights) {
    const totalWeightOz = this.totalGrossOz(itemWeights);
    let totalOzInLbs = totalWeightOz / 16;
    totalOzInLbs = this.roundToAtMostTwoDecimalPlaces(totalOzInLbs);
    return totalOzInLbs;
  },
  roundToAtMostTwoDecimalPlaces(floatValue) {
    return Math.round(floatValue * 100 + Number.EPSILON) / 100;
  }
};

export default unitConversion;
