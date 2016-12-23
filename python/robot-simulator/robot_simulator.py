from IPython import embed

NORTH = 'up'
EAST  = 'right'
SOUTH = 'down'
WEST  = 'left'


class Robot():

    def __init__(self, bearing = NORTH, x = 0, y = 0):
        self.coordinates = (x, y)
        self.bearing = bearing

    def turn_right(self):
        if self.bearing == NORTH:
            self.bearing = EAST
        elif self.bearing == EAST:
            self.bearing = SOUTH
        elif self.bearing == SOUTH:
            self.bearing = WEST
        elif self.bearing == WEST:
            self.bearing = NORTH

    def turn_left(self):
        if self.bearing == NORTH:
            self.bearing = WEST
        elif self.bearing == WEST:
            self.bearing = SOUTH
        elif self.bearing == SOUTH:
            self.bearing = EAST
        elif self.bearing == EAST:
            self.bearing = NORTH

    def advance(self):
        if self.bearing == NORTH:
            new_x = self.coordinates[0]
            new_y = self.coordinates[1] + 1
            self.coordinates = (new_x, new_y)
        elif self.bearing == SOUTH:
            new_x = self.coordinates[0]
            new_y = self.coordinates[1] - 1
            self.coordinates = (new_x, new_y)
        elif self.bearing == EAST:
            new_x = self.coordinates[0] + 1
            new_y = self.coordinates[1]
            self.coordinates = (new_x, new_y)
        elif self.bearing == WEST:
            new_x = self.coordinates[0] - 1
            new_y = self.coordinates[1]
            self.coordinates = (new_x, new_y)

    def simulate(self, directions):
        for letter in directions:
            if letter == 'L':
                self.turn_left()
            elif letter == 'R':
                self.turn_right()
            elif letter == 'A':
                self.advance()
