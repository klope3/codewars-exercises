//https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrant(x, y) {
  if (y > 0)
    if (x > 0) return 1;
    else return 2;
  if (y < 0)
    if (x < 0) return 3;
    else return 4;
}
