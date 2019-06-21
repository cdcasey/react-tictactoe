import React from 'react';

import Square from './Square';


export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                winningCell={this.props.winningCells.includes(i) ? 'winner' : ''}
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const width = 3;
        const totalSquares = 9;
        let squareNum = 0;
        const board = [];
        for (let i = 0; i < totalSquares; i += 3) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(squareNum));
                squareNum++;
            }
            board.push(<div key={`row${i / width}`} className="board-row">{row}</div>);
        }
        return (
            <div>
                {board}
                {/* <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div> */}
            </div>
        );
    }
}