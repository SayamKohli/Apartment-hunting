function apartmentHunting(blocks, reqs) {
    // Create an array of "infinity" values with a length equal to the number of blocks
    const maxDistanceAtBlocks = Array(blocks.length).fill(-Infinity);
  
    // Loop through each block
    for (let i = 0; i < blocks.length; i++) {
      // Loop through each requirement
      for (const req of reqs) {
        // Set the closest distance to the requirement to "infinity"
        let closestReqDistance = Infinity;
  
        // Loop through each block again
        for (let j = 0; j < blocks.length; j++) {
          // If the current block has the requirement, update the closest distance to the requirement
          if (blocks[j][req]) {
            closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j));
          }
        }
        // Update the maximum distance to all requirements at the current block
        maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i], closestReqDistance);
      }
    }
    // Return the index of the block with the minimum maximum distance to all requirements
    return getIndexAtMinValue(maxDistanceAtBlocks);
  }
  
  // Calculate the distance between two blocks
  function distanceBetween(i, j) {
    return Math.abs(i - j);
  }
  
  // Get the index at the minimum value in an array
  function getIndexAtMinValue(array) {
    let idxAtMinValue = 0;
    let minValue = Infinity;
    for (let i = 0; i < array.length; i++) {
      const currentValue = array[i];
      if (currentValue < minValue) {
        idxAtMinValue = i;
        minValue = currentValue;
      }
    }
    return idxAtMinValue;
  }
exports.apartmentHunting = apartmentHunting;
