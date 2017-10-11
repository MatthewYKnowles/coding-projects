public class EastOrientation implements IOrientation {
    @Override
    public IOrientation turnRight() {
        return new SouthOrientation();
    }
}
