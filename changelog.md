# Changelog

## Version 2.0.0

### Added
- Implemented a more sophisticated random number generator (Xorshift) for better randomness
- Added numbered tiles to the board
- Implemented visual connections between tiles
- Added a connection display at the top of the board
- Implemented responsive design for various screen sizes
- Added fading effect for tiles without connections

### Changed
- Refactored Board component to use React hooks (useMemo)
- Updated Item component to display numbered tiles and connections
- Modified Styled components to support new visual elements and responsiveness

### Detailed Implementation Steps

1. Random Number Generator:
   - Implemented Xorshift algorithm in Board component for improved randomness

2. Board Component Updates:
   - Refactored to use useMemo hook for performance optimization
   - Implemented logic to generate random connections between tiles
   - Added ConnectionsDisplay component to show connections at the top of the board

3. Item Component Updates:
   - Added TileNumber styled component to display tile numbers
   - Implemented logic to show/hide connections based on props
   - Added fading effect for tiles without connections

4. Styled Components Updates:
   - Added new Connection styled components (TopConnection, RightConnection, etc.)
   - Updated StyledGrid for responsive design
   - Modified existing components to support new layout and visual elements

5. Responsiveness:
   - Implemented media queries in StyledGrid for different screen sizes
   - Adjusted layout and sizing for smaller screens

6. Visual Enhancements:
   - Added circular background for tile numbers
   - Implemented connection lines between tiles
   - Adjusted colors and styles for better visual appeal

7. Code Organization:
   - Kept constants (MAX_ITEMS, MAX_ITEMS_PER_ROW) in a separate file
   - Maintained separation of concerns between Board and Item components
