import React, { Component } from "react";

import Node from "../Node/Node.jsx";
import { showPopUp } from "../Guide/Guide.jsx";
import Info from "../Info/Info.jsx";
import { Guide } from "../Guide/Guide.jsx";

import { dijkstra } from "../algorithms/dj";
import { AStar } from "../algorithms/aStar";
import { dfs } from "../algorithms/dfs";
import { bfs } from "../algorithms/bfs";

import "./PathfindingVisualizer.css";

// Defining initial state of start and finish.

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      row_max_length: 19,
      col_max_length: 40,
      START_NODE_ROW: 9,
      START_NODE_COL: 8,
      FINISH_NODE_ROW: 9,
      FINISH_NODE_COL: 31,
      topMessage: "Pathfinder Visualizer",
      isRunning: false,
      isStartNode: false,
      isFinishNode: false,
      isWallNode: false,
      isWeight: true,
      changeWeight: true,
      mouseIsPressed: false,
      currRow: 0,
      currCol: 0,
      weight: 1,
      distanceToBeTraveled: 0,
      running: 0,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  componentDidMount() {
    const grid = this.getInitialGrid();
    this.setState({ grid });
  }

  toggleIsRunning() {
    this.setState({ isRunning: !this.state.isRunning });
  }

  /******************** Set up the initial grid ********************/
  getInitialGrid = (
    rowCount = this.state.row_max_length,
    colCount = this.state.col_max_length
  ) => {
    const initialGrid = [];
    for (let row = 0; row < rowCount; row++) {
      const currentRow = [];
      for (let col = 0; col < colCount; col++) {
        currentRow.push(this.createNode(row, col));
      }
      initialGrid.push(currentRow);
    }
    return initialGrid;
  };

  createNode = (row, col) => {
    return {
      row,
      col,
      isStart:
        row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
      isFinish:
        row === this.state.FINISH_NODE_ROW &&
        col === this.state.FINISH_NODE_COL,
      distance: Infinity,
      distanceToFinishNode:
        Math.abs(this.state.FINISH_NODE_ROW - row) +
        Math.abs(this.state.FINISH_NODE_COL - col),
      isVisited: false,
      isWall: false,
      previousNode: null,
      isNode: true,
      isWeight: false,
      weight: 0,
    };
  };

  /******************** Control mouse events ********************/
  handleMouseDown(row, col) {
    if (!this.state.isRunning) {
      if (this.isGridClear()) {
        if (
          document.getElementById(`node-${row}-${col}`).className ===
          "node node-start"
        ) {
          this.setState({
            mouseIsPressed: true,
            isStartNode: true,
            currRow: row,
            currCol: col,
          });
        } else if (
          document.getElementById(`node-${row}-${col}`).className ===
          "node node-finish"
        ) {
          this.setState({
            mouseIsPressed: true,
            isFinishNode: true,
            currRow: row,
            currCol: col,
          });
        } else if (!this.state.changeWeight) {
          const newGrid = getNewGridWithWeightToggled(
            this.state.grid,
            row,
            col,
            this.state.weight
          );
          this.setState({
            grid: newGrid,
            mouseIsPressed: true,
            isWeight: true,
            currRow: row,
            currCol: col,
          });
        } else {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
          this.setState({
            grid: newGrid,
            mouseIsPressed: true,
            isWallNode: true,
            currRow: row,
            currCol: col,
          });
        }
      } else {
        this.clearGrid();
      }
    }
  }

  isGridClear() {
    for (const row of this.state.grid) {
      for (const node of row) {
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (
          nodeClassName === "node node-visited" ||
          nodeClassName === "node node-shortest-path"
        ) {
          return false;
        }
      }
    }
    return true;
  }

  handleMouseEnter(row, col) {
    if (!this.state.isRunning) {
      if (this.state.mouseIsPressed) {
        const nodeClassName = document.getElementById(
          `node-${row}-${col}`
        ).className;
        if (this.state.isStartNode) {
          if (nodeClassName !== "node node-wall") {
            const prevStartNode =
              this.state.grid[this.state.currRow][this.state.currCol];
            prevStartNode.isStart = false;
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`
            ).className = "node";

            this.setState({ currRow: row, currCol: col });
            const currStartNode = this.state.grid[row][col];
            currStartNode.isStart = true;
            document.getElementById(`node-${row}-${col}`).className =
              "node node-start";
          }
          this.setState({ START_NODE_ROW: row, START_NODE_COL: col });
        } else if (this.state.isFinishNode) {
          if (nodeClassName !== "node node-wall") {
            const prevFinishNode =
              this.state.grid[this.state.currRow][this.state.currCol];
            prevFinishNode.isFinish = false;
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`
            ).className = "node";

            this.setState({ currRow: row, currCol: col });
            const currFinishNode = this.state.grid[row][col];
            currFinishNode.isFinish = true;
            document.getElementById(`node-${row}-${col}`).className =
              "node node-finish";
          }
          this.setState({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col });
        } else if (this.state.isWallNode) {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
          this.setState({ grid: newGrid });
        } else if (this.state.isWeight) {
          const newGrid = getNewGridWithWeightToggled(
            this.state.grid,
            row,
            col,
            this.state.weight
          );
          this.setState({
            grid: newGrid,
            mouseIsPressed: true,
            isWeight: true,
            currRow: row,
            currCol: col,
          });
        }
      }
    }
  }

  handleMouseUp(row, col) {
    if (!this.state.isRunning) {
      this.setState({ mouseIsPressed: false });
      if (this.state.isStartNode) {
        const isStartNode = !this.state.isStartNode;
        this.setState({
          isStartNode,
          START_NODE_ROW: row,
          START_NODE_COL: col,
        });
      } else if (this.state.isFinishNode) {
        const isFinishNode = !this.state.isFinishNode;
        this.setState({
          isFinishNode,
          FINISH_NODE_ROW: row,
          FINISH_NODE_COL: col,
        });
      }
      this.getInitialGrid();
    }
  }

  handleMouseLeave() {
    if (this.state.isStartNode) {
      const isStartNode = !this.state.isStartNode;
      this.setState({ isStartNode, mouseIsPressed: false });
    } else if (this.state.isFinishNode) {
      const isFinishNode = !this.state.isFinishNode;
      this.setState({ isFinishNode, mouseIsPressed: false });
    } else if (this.state.isWallNode) {
      const isWallNode = !this.state.isWallNode;
      this.setState({ isWallNode, mouseIsPressed: false });
      this.getInitialGrid();
    } else if (this.state.isWeight) {
      const isWeight = !this.state.isWeight;
      this.setState({ isWeight, mouseIsPressed: false });
      this.getInitialGrid();
    }
  }

  /******************** Clear Board/Walls ********************/

  clearGrid() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (
            nodeClassName !== "node node-start" &&
            nodeClassName !== "node node-finish" &&
            nodeClassName !== "node node-wall"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
          }
          if (nodeClassName === "node node-finish") {
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode = 0;
          }
          if (nodeClassName === "node node-start") {
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
            node.isStart = true;
            node.isWall = false;
            node.previousNode = null;
            node.isNode = true;
          }
        }
      }
    }
  }

  clearWalls() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (nodeClassName === "node node-wall") {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
            node.isWall = false;
          }
        }
      }
    }
  }

  /******************** Create Animations ********************/
  visualize(algo) {
    if (!this.state.isRunning) {
      this.clearGrid();
      this.toggleIsRunning();
      const { grid } = this.state;
      const startNode =
        grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
      const finishNode =
        grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
      let visitedNodesInOrder;
      switch (algo) {
        case "Dijkstra":
          visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
          break;
        case "AStar":
          visitedNodesInOrder = AStar(grid, startNode, finishNode);
          break;
        case "BFS":
          visitedNodesInOrder = bfs(grid, startNode, finishNode);
          break;
        case "DFS":
          visitedNodesInOrder = dfs(grid, startNode, finishNode);
          break;
        default:
          // should never get here
          break;
      }
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      nodesInShortestPathOrder.push("end");
      this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
    }
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visitedWeight";
        } else if (
          nodeClassName !== "node node-start" &&
          nodeClassName !== "node node-finish"
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }
      }, 10 * i);
    }
  }

  /******************** Create path from start to finish ********************/
  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      if (nodesInShortestPathOrder[i] === "end") {
        setTimeout(() => {
          this.toggleIsRunning();
        }, i * 50);
      } else {
        setTimeout(() => {
          const node = nodesInShortestPathOrder[i];
          const nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (nodesInShortestPathOrder[i].isWeight) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node node-path-weight";
          } else if (
            nodeClassName !== "node node-start" &&
            nodeClassName !== "node node-finish" &&
            nodeClassName !== "node node-wall"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node node-path";
          }
        }, i * 40);
      }
    }
  }

  // // On pressing the mouse down
  // handleMouseDown(row, col) {
  //   if (this.state.topMessage !== "Dijkstra's Algorithm") return;

  //   let newGrid = [];

  //   if (this.state.changeWeight) {
  //     newGrid = getNewGridWithWeightToggled(
  //       this.state.grid,
  //       row,
  //       col,
  //       this.state.weight
  //     );
  //   } else {
  //     newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
  //   }

  //   this.setState({ grid: newGrid, mouseIsPressed: true });
  // }

  // // On entering the new node element.
  // handleMouseEnter(row, col) {
  //   if (this.state.topMessage !== "Dijkstra's Algorithm") return;
  //   if (!this.state.mouseIsPressed) return;

  //   let newGrid = [];

  //   if (this.state.changeWeight) {
  //     newGrid = getNewGridWithWeightToggled(
  //       this.state.grid,
  //       row,
  //       col,
  //       this.state.weight
  //     );
  //   } else {
  //     newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
  //   }

  //   this.setState({ grid: newGrid, mouseIsPressed: true });
  // }

  // // When we release the mouse
  // handleMouseUp() {
  //   if (this.state.topMessage !== "Dijkstra's Algorithm") return;
  //   this.setState({ mouseIsPressed: false });
  // }

  // visualizeDijkstra() {
  //   this.setState({ topMessage: "Final Year Project By Cyril" });
  //   const { grid } = this.state;
  //   const startNode = grid[START_NODE_ROW][START_NODE_COL];
  //   const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  //   const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  //   const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  //   this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  // }

  // animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
  //   for (let i = 1; i <= visitedNodesInOrder.length; i++) {
  //     // When we reach the last element in visitedNodesInOrder.
  //     if (i === visitedNodesInOrder.length) {
  //       setTimeout(() => {
  //         this.setState({ topMessage: "Shortest Path" });
  //         this.animateShortestPath(nodesInShortestPathOrder);
  //       }, 10 * i);
  //       return;
  //     }

  //     if (i === visitedNodesInOrder.length - 1) continue;
  //     setTimeout(() => {
  //       const node = visitedNodesInOrder[i];
  //       if (node.isWeight) {
  //         document.getElementById(`node-${node.row}-${node.col}`).className =
  //           "node node-visitedWeight";
  //       } else {
  //         document.getElementById(`node-${node.row}-${node.col}`).className =
  //           "node node-visited";
  //       }
  //     }, 10 * i);
  //   }
  // }

  // animateShortestPath(nodesInShortestPathOrder) {
  //   let timeTaken = 0;
  //   for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
  //     setTimeout(() => {
  //       const node = nodesInShortestPathOrder[i];
  //       if (nodesInShortestPathOrder[i].isWeight) {
  //         document.getElementById(`node-${node.row}-${node.col}`).className =
  //           "node node-path-weight";
  //       } else {
  //         document.getElementById(`node-${node.row}-${node.col}`).className =
  //           "node node-path";
  //       }
  //     }, 50 * i);
  //   }

  //   timeTaken =
  //     nodesInShortestPathOrder[nodesInShortestPathOrder.length - 1].distance;
  //   this.setState({ distanceToBeTraveled: timeTaken });
  // }

  weightChangeHandler = (event) => {
    this.setState({ weight: event.target.value });
  };

  pointChangeHandler = () => {
    if (this.notCorrect()) return; //To check if the provided value is suitable or not.

    document.getElementById(
      `node-${this.state.START_NODE_ROW}-${this.state.START_NODE_COL}`
    ).className = "node";
    document.getElementById(
      `node-${this.state.FINISH_NODE_ROW}-${this.state.FINISH_NODE_COL}`
    ).className = "node";

    this.state.START_NODE_ROW = parseInt(
      document.getElementById("start_row").value
    );
    this.state.START_NODE_COL = parseInt(
      document.getElementById("start_col").value
    );
    this.state.FINISH_NODE_ROW = parseInt(
      document.getElementById("end_row").value
    );
    this.state.FINISH_NODE_COL = parseInt(
      document.getElementById("end_col").value
    );

    document.getElementById(
      `node-${this.state.START_NODE_ROW}-${this.state.START_NODE_COL}`
    ).className = "node node-start";
    document.getElementById(
      `node-${this.state.FINISH_NODE_ROW}-${this.state.FINISH_NODE_COL}`
    ).className = "node node-finish";
  };

  notCorrect = () => {
    if (
      isNaN(parseInt(document.getElementById("start_row").value)) ||
      isNaN(parseInt(document.getElementById("start_col").value)) ||
      isNaN(parseInt(document.getElementById("end_row").value)) ||
      isNaN(parseInt(document.getElementById("end_col").value))
    )
      return true;

    if (
      parseInt(document.getElementById("start_row").value) >
        this.state.row_max_length ||
      parseInt(document.getElementById("start_col").value) >
        this.state.col_max_length
    )
      return true;
    if (
      parseInt(document.getElementById("start_row").value) < 0 ||
      parseInt(document.getElementById("start_col").value) < 0
    )
      return true;

    if (
      parseInt(document.getElementById("end_row").value) >
        this.state.row_max_length ||
      parseInt(document.getElementById("end_col").value) >
        this.state.col_max_length
    )
      return true;
    if (
      parseInt(document.getElementById("end_row").value) < 0 ||
      parseInt(document.getElementById("end_col").value) < 0
    )
      return true;

    return false;
  };

  toggleWeight = () => {
    const temp = this.state.changeWeight;
    this.setState({ changeWeight: !temp });
  };

  render() {
    const { grid, mouseIsPressed, topMessage } = this.state;
    let button_task = (
      <>
        <button
          type="button"
          className="buttonContainer btn-red"
          onClick={() => this.clearGrid()}
        >
          Clear Grid
        </button>
        <button
          type="button"
          className="buttonContainer btn-amber"
          onClick={() => this.clearWalls()}
        >
          Clear Walls
        </button>
        <button
          type="button"
          className="buttonContainer btn-blue"
          onClick={() => {
            this.visualize("Dijkstra");
            this.state.running = "dj";
          }}
        >
          Dijkstra's
        </button>
        <button
          type="button"
          className="buttonContainer btn-blue"
          onClick={() => {
            this.visualize("AStar");
            this.state.running = "as";
          }}
        >
          A*
        </button>
        <button
          type="button"
          className="buttonContainer btn-blue"
          onClick={() => {
            this.visualize("BFS");
            this.state.running = "bfs";
          }}
        >
          Breadth First Search
        </button>
        <button
          type="button"
          className="buttonContainer btn-blue"
          onClick={() => {
            this.visualize("DFS");
            this.state.running = "dfs";
          }}
        >
          Depth First Search
        </button>
      </>
    );

    // if (topMessage === "Shortest Path") {
    //   button_task = (
    //     <h2
    //       className="btn"
    //       href="#"
    //       onClick={() => window.location.reload(false)}
    //     >
    //       Reset <br />
    //       Time : {distanceToBeTraveled}
    //       <small> [1 Block = 1 Time]</small>
    //     </h2>
    //   );
    // } else if (topMessage === "Final Year Project By Cyril") {
    //   button_task = <h3 className="running">Running...</h3>;
    // }

    let changeWeightText = "False";

    if (this.state.changeWeight) changeWeightText = "True";

    let textBox = (
      <div className="textBox">
        <div className="weightContainer">
          <label htmlFor="quantity">Set / Toggle Weight </label>

          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
            onChange={this.weightChangeHandler}
            defaultValue="1"
          />

          <button onClick={this.toggleWeight}>{changeWeightText}</button>
        </div>

        <div className="startPointContainer">
          <label htmlFor="point">Start Point </label>
          <input
            type="number"
            name="point"
            id="start_row"
            min="0"
            max={this.state.row_max_length - 1}
            onChange={this.pointChangeHandler}
            defaultValue="9"
          ></input>
          <input
            type="number"
            name="point"
            id="start_col"
            min="0"
            max={this.state.col_max_length - 1}
            onChange={this.pointChangeHandler}
            defaultValue="8"
          ></input>
        </div>

        <div className="endPointContainer">
          <label htmlFor="point">Finish Point </label>
          <input
            type="number"
            name="point"
            id="end_row"
            min="0"
            max={this.state.row_max_length - 1}
            onChange={this.pointChangeHandler}
            defaultValue="9"
          ></input>
          <input
            type="number"
            name="point"
            id="end_col"
            min="0"
            max={this.state.col_max_length - 1}
            onChange={this.pointChangeHandler}
            defaultValue="31"
          ></input>
        </div>

        <div className="btn-con">{button_task}</div>
      </div>
    );

    if (topMessage === "Final Year Project By Cyril") {
      textBox = null;
    } else if (topMessage === "Shortest Path") {
      textBox = <div className="btn-con">{button_task}</div>;
    }

    return (
      <>
        <div className="pv">
          <div className="pathfindingVisualizer">
            <div className="container">
              <div className="heading">
                <h2 onClick={showPopUp}>{topMessage}</h2>
              </div>

              {/* Show the header */}
              {textBox}

              {/* <p>
              Dijkstra's Algorithm is weighted and guarantees the shortest path!{" "}
              <span className="ref"></span>
            </p> */}
            </div>

            <div className="visualGridContainer">
              <div className="gridBox">
                <table className="grid" style={{ borderSpacing: "0" }}>
                  <tbody>
                    {grid.map((row, rowIndex) => {
                      return (
                        <tr key={rowIndex}>
                          {row.map((node, nodeIndex) => {
                            const { isStart, isFinish, isWall, isWeight } =
                              node; //Extracting from the node
                            return (
                              <Node
                                row={rowIndex}
                                col={nodeIndex}
                                key={rowIndex + "-" + nodeIndex}
                                isStart={isStart}
                                isFinish={isFinish}
                                isWall={isWall}
                                isWeight={isWeight}
                                mouseIsPressed={mouseIsPressed}
                                onMouseDown={(row, col) =>
                                  this.handleMouseDown(row, col)
                                }
                                onMouseEnter={(row, col) =>
                                  this.handleMouseEnter(row, col)
                                }
                                onMouseUp={() => this.handleMouseUp()}
                              ></Node>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*Information about the algorithm*/}

          <Info runningAlgo={this.state.running}></Info>

          <div className="PopUp">
            <Guide />
          </div>
        </div>
      </>
    );
  }
}

/******************** Create Walls ********************/
const getNewGridWithWallToggled = (grid, row, col) => {
  // mouseDown starts to act strange if I don't make newGrid and work off of grid instead.
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (!node.isStart && !node.isFinish && node.isNode) {
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
  }
  return newGrid;
};

// Backtracks from the finishNode to find the shortest path.
// Only works when called after the pathfinding methods.
function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

const getNewGridWithWeightToggled = (grid, row, col, weight) => {
  const newGrid = [...grid];
  const node = newGrid[row][col];
  const newNode = {
    ...node, // copying other properties of the node
    isWeight: !node.isWeight,
    weight: parseInt(weight),
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
