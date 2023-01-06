# Apartment-hunting
The apartmentHunting function is designed to find the index of the block that is closest to all of the required amenities. It does this by calculating the distance from each block to each required amenity, and then taking the maximum distance over all of the required amenities for each block. The block with the minimum maximum distance to all required amenities is then returned.

To calculate the distance from each block to each required amenity, the function loops through each block and each required amenity, and then loops through each block again to find the block with the required amenity. The distance between the two blocks is then calculated using the distanceBetween function, which returns the absolute difference between the indices of the two blocks.

Once the distance from each block to each required amenity has been calculated, the function takes the maximum of these distances for each block using Math.max. This gives us the maximum distance to all required amenities for each block.

Finally, the function returns the index of the block with the minimum maximum distance to all required amenities using the helper function getIndexAtMinValue, which loops through the array of maximum distances and returns the index of the minimum value.

Overall, the apartmentHunting function uses a brute force approach to find the index of the block that is closest to all of the required amenities. It does this by calculating the distance from each block to each required amenity, and then taking the maximum distance over all of the required amenities for each block. The block with the minimum maximum distance to all required amenities is then returned.
