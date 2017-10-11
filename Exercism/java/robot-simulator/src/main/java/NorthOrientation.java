public class NorthOrientation implements IOrientation {

    @Override
    public IOrientation turnRight() {
        return new EastOrientation();
    }
}
