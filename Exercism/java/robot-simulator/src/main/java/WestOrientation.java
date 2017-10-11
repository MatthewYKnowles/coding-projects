public class WestOrientation implements IOrientation {
    @Override
    public IOrientation turnRight() {
        return new NorthOrientation();
    }
}
