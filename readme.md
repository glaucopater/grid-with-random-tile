# Grid with Random Tile

A random map generator, powered by Redux events.

![Demo](/demo/grid-with-random-tile.png)

## Features

- Random item generation with improved randomness (Xorshift algorithm)
- Styled grid and items with responsive design
- Random positions for items
- Position in real 2D space
- Connections between tiles with visual representation
- Numbered tiles
- Connection display at the top of the board
- Fading effect for disconnected tiles

## Installation

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start the development server

## Usage

The application will display a 3x3 grid of randomly generated tiles. Each tile has a number and may have connections to adjacent tiles. The connections are displayed visually on the tiles and listed at the top of the board.

## Components

- `Board`: Main component that generates the grid and manages the overall layout
- `Item`: Represents individual tiles in the grid
- `Styled`: Contains styled components for visual representation

## Redux Integration

The application uses Redux for state management. The `firstAction` is connected to the `Board` component for potential future enhancements.

## Responsive Design

The grid adapts to different screen sizes:
- Desktop: Up to 600px width and height
- Tablet: Adjusts for screens up to 450px wide
- Mobile: Further adjustments for screens up to 350px wide

## Future Enhancements

- Implement step-by-step evaluation
- Add heuristics for pathfinding
- Dissolve or remove useless blocks
- Test and optimize performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
