import java.util.HashMap;

public class TennisGame2 implements TennisGame
{
    private String player1Name;
    private String player2Name;
    private int P1point = 0;
    private int P2point = 0;
    private final HashMap<Integer, String> pointsToScore;

    TennisGame2(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        pointsToScore = new HashMap<Integer, String>();
        pointsToScore.put(0, "Love");
        pointsToScore.put(1, "Fifteen");
        pointsToScore.put(2, "Thirty");
        pointsToScore.put(3, "Forty");
    }

    public String getScore(){
        if (haveSamePoints())
        {
            return getSamePointScore();
        }

        if (inEndGame()){
            return getEndGameScore();
        }

        return getNonTiedScore();

    }

    public void wonPoint(String player) {
        if (player.equals("player1"))
            P1point++;
        else
            P2point++;
    }

    private boolean inEndGame() {
        return P1point >= 4 || P2point >= 4;
    }

    private String getEndGameScore() {
        if (playerAheadByOne()){
            return "Advantage " + getLeadingPlayer();
        }
        return "Win for " + getLeadingPlayer();
    }

    private String getLeadingPlayer() {
        return P1point > P2point ? player1Name : player2Name;
    }

    private boolean playerAheadByOne() {
        return Math.abs(P1point - P2point) == 1;
    }

    private String getNonTiedScore() {
        return pointsToScore.get(P1point) + "-" + pointsToScore.get(P2point);
    }

    private String getSamePointScore() {
        return P1point >= 3 ? "Deuce" : pointsToScore.get(P1point) + "-All";
    }

    private boolean haveSamePoints() {
        return P1point == P2point;
    }
}