public class Robot {
    private GridPosition gridPosition;
    private IOrientation orientation;

    public Robot(GridPosition gridPosition, Orientation orientation) throws Exception {

        this.gridPosition = gridPosition;
        this.orientation = OrientationFactory.getOrientation(orientation);
    }

    public GridPosition getGridPosition() {
        return gridPosition;
    }

    public Orientation getOrientation() {
        return orientation.getOrientation();
    }

    public void turnRight() {
        if(orientation == Orientation.NORTH) {
            orientation = Orientation.EAST;
        }
        else if(orientation == Orientation.EAST) {
            orientation = Orientation.SOUTH;
        }
        else if(orientation == Orientation.SOUTH) {
            orientation = Orientation.WEST;
        } else {
            orientation = Orientation.NORTH;
        }

    }

    public void turnLeft() {
        if(orientation == Orientation.NORTH) {
            orientation = Orientation.WEST;
        }
        else if(orientation == Orientation.WEST) {
            orientation = Orientation.SOUTH;
        }
        else if(orientation == Orientation.SOUTH) {
            orientation = Orientation.EAST;
        } else {
            orientation = Orientation.NORTH;
        }
    }

    public void advance() {
    }

    public void simulate(String rraaaaala) {
    }
}
