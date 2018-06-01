public class PointsFactory {
    public static IPoints getPoints(int points) {
        if (points == 0) {
            return new ZeroPoints();
        }
        if (points == 1) {
            return new FifteenPoints();
        }
        if (points == 2) {
            return new ThirtyPoints();
        }
        return new FortyPoints();
    }
}
