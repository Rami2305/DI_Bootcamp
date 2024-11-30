

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Specify either radius or diameter, not both")
        
        if radius is None and diameter is None:
            raise ValueError("Specify either radius or diameter")
        
        if radius is not None:
            if radius < 0:
                raise ValueError("Radius cannot be negative")
            self.radius = radius
        else:
            if diameter < 0:
                raise ValueError("Diameter cannot be negative")
            self.radius = diameter / 2
    
    @property
    def radius(self):

    @radius.setter
    def radius(self, value):

    @property
    def diameter(self):
    
    @diameter.setter
    def diamter(self, value):