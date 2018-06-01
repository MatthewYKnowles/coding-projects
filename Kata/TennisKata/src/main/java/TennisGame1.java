
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
        if (playerName == playerOneName)
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
        int scoreDifference = playerOneScore - playerTwoScore;
        if (scoreDifferenceIsOne(scoreDifference)){
            return getAdvantageScore();
        }
        return getWinningScore();
    }

    private String getWinningScore() {
        String score = "Win for ";
        score += (playerOneScore - playerTwoScore) > 0 ? playerOneName : playerTwoName;
        return score;
    }

    private String getAdvantageScore() {
        String score = "Advantage ";
        score += (playerOneScore - playerTwoScore) > 0 ? playerOneName : playerTwoName;
        return score;
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
