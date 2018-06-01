
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
        String score = "";
        IPoints playerOnePoints = PointsFactory.getPoints(playerOneScore);
        IPoints playerTwoPoints = PointsFactory.getPoints(playerTwoScore);
        if (scoreIsTied())
        {
            return playerOnePoints.getEvenScore();
        }
        if (playerOneScore >=4 || playerTwoScore >=4)
        {
            int minusResult = playerOneScore - playerTwoScore;
            if (minusResult==1) score ="Advantage player1";
            else if (minusResult ==-1) score ="Advantage player2";
            else if (minusResult>=2) score = "Win for player1";
            else score ="Win for player2";
        }
        else
        {
            score = playerOnePoints.getScore() + "-" + playerTwoPoints.getScore();
        }
        return score;
    }

    private boolean scoreIsTied() {
        return playerOneScore == playerTwoScore;
    }
}
