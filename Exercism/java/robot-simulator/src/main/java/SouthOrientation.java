public class SouthOrientation implements IOrientation {

    @Override
    public IOrientation turnRight() {
        return new WestOrientation();
    }
}
