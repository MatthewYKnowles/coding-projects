using System;
using System.Collections.Generic;


public static class QueenAttack
{
    private const int NumberOfRows = 8;
    private const int NumberOfColumns = 8;

    private static readonly Dictionary<Direction, (int, int)> DiagonalDirections = new Dictionary<Direction, (int, int)>
    {
        {Direction.NorthWest, (-1, -1)},
        {Direction.NorthEast, (-1, 1)},
        {Direction.SouthEast, (1, 1)},
        {Direction.SouthWest, (1, -1)}
    };

    public static Queen Create(int row, int column)
    {
        CheckIfValidPosition(row, column);
        return new Queen(row, column);
    }

    public static bool CanAttack(Queen white, Queen black) => 
        IsSameRow(white.Row, black.Row) 
        || IsSameColumn(white.Column, black.Column) 
        || IsSameDiagonal((white.Row, white.Column), (black.Row, black.Column));

    private static bool IsSameDiagonal((int Row, int Column) queen1, (int Row, int Column) queen2) =>
        IsOnDiagonal(queen1, queen2, Direction.SouthWest)
        || IsOnDiagonal(queen1, queen2, Direction.NorthEast)
        || IsOnDiagonal(queen1, queen2, Direction.NorthWest)
        || IsOnDiagonal(queen1, queen2, Direction.SouthEast);

    private static bool IsOnDiagonal((int Row, int Column) queen1, (int Row, int Column) queen2, Direction direction)
    {
        var pieceRow = queen1.Row;
        var pieceColumn = queen1.Column;
        while (pieceRow >= 0 && pieceRow <= 8 && pieceColumn >= 0 && pieceColumn <= 8)
        {
            if (pieceRow == queen2.Row && pieceColumn  == queen2.Column)
            {
                return true;
            }

            pieceRow += DiagonalDirections[direction].Item1;
            pieceColumn += DiagonalDirections[direction].Item2;
        }

        return false;
    }

    private static bool IsSameColumn(int column1, int column2) => column1 == column2;

    private static bool IsSameRow(int row1, int row2) => row1 == row2;
    
    private static void CheckIfValidPosition(int row, int column)
    {
        if (row < 0 || row >= NumberOfRows || column < 0 || column >= NumberOfColumns)
        {
            throw new ArgumentOutOfRangeException();
        }
    }
}

public class Queen
{
    public Queen(int row, int column)
    {
        Row = row;
        Column = column;
    }

    public int Row { get; }
    public int Column { get; }
}

internal enum Direction
{
    NorthWest,
    NorthEast,
    SouthEast,
    SouthWest
}