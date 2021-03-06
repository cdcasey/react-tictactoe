import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className={"square " + props.winningCell} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
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

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            ascending: false
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        // If there's a winner or if there's an X or O in the square, do nothing
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const col = i % 3;
        const row = Math.floor(i / 3);
        const lastSquare = [col, row];
        this.setState({
            // history: history.concat([{
            //     squares,
            // }]),
            history: [...history, { squares, lastSquare }],
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    setSort() {
        this.setState({
            ascending: !this.state.ascending
        })
    }

    render() {
        const history = this.state.history;
        // const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const currentStep = move === this.state.stepNumber ? 'current' : '';
            const desc = move ?
                `Go to move #${move} ${step.lastSquare}` :
                'Go to game start';
            return (
                <li className={currentStep} key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner.letter;
        } else if (this.state.stepNumber === 9) {
            status = 'DRAW. There is no winner. You may as well stop playing.'
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winningCells={winner ? winner.cells : []}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.setSort()}>Reverse sort order</button>
                    <ol className={this.state.ascending ? "ascending" : "descending"}>{moves}</ol>
                    {/* <ol>{this.state.ascending ? moves.reverse() : moves}</ol> */}
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                letter: squares[a], cells: [a, b, c]
            }
        }
    }
    return null;
}