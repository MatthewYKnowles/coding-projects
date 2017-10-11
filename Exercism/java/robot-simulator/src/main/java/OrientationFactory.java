public class OrientationFactory {
    public static IOrientation getOrientation(Orientation orientation) throws Exception {
        switch (orientation) {
            case NORTH:
                return new NorthOrientation();
            case EAST:
                return new EastOrientation();
            case WEST:
                return new WestOrientation();
            case SOUTH:
                return new SouthOrientation();
            default:
                throw new Exception();
        }
    }
}
