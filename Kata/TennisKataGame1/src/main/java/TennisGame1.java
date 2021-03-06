
public class TennisGame1 implements TennisGame {
    
    private int playerOneScore = 0;
    private int playerTwoScore = 0;
    private String playerOneName;
    private String playerTwoName;

    public TennisGame1(String player1Name, String player2Name) {
        this.playerOneName = player1Name;
        this.playerTwoName = player2Name;
    }

    public void wonPoint(String playerName) {
        if (playerName.equals(playerOneName))
            playerOneScore += 1;
        else
            playerTwoScore += 1;
    }

    public String getScore() {
        IPoints playerOnePoints = PointsFactory.getPoints(playerOneScore);
        IPoints playerTwoPoints = PointsFactory.getPoints(playerTwoScore);
        if (scoreIsTied())
        {
            return playerOnePoints.getEvenScore();
        }
        if (scoreIsInEndGame())
        {
            return determineEndGameScore();
        }
        return playerOnePoints.getScore() + "-" + playerTwoPoints.getScore();
    }

    private String determineEndGameScore() {
        if (scoreDifferenceIsOne(playerOneScore - playerTwoScore)){
            return getAdvantageScore();
        }
        return getWinningScore();
    }

    private String getWinningScore() {
        return "Win for " + getPlayerWithHigherPoints();
    }

    private String getAdvantageScore() {
        return "Advantage " + getPlayerWithHigherPoints();
    }

    private String getPlayerWithHigherPoints() {
        return (playerOneScore - playerTwoScore) > 0 ? playerOneName : playerTwoName;
    }

    private boolean scoreDifferenceIsOne(int scoreDifference) {
        return Math.abs(scoreDifference) == 1;
    }

    private boolean scoreIsInEndGame() {
        return playerOneScore >=4 || playerTwoScore >=4;
    }

    private boolean scoreIsTied() {
        return playerOneScore == playerTwoScore;
    }
}
