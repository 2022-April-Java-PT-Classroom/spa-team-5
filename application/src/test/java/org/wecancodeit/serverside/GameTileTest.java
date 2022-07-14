package org.wecancodeit.serverside;

import org.junit.jupiter.api.Test;
import org.wecancodeit.serverside.models.GameTile;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GameTileTest {

    @Test
    public void shouldReturnTileForName(){
        GameTile underTest = new GameTile("Tile", 1);
        assertEquals("Tile", underTest.getName());
    }

    @Test
    public void shouldReturnTileForGetImage(){
        GameTile underTest = new GameTile("Tile", 1);
        assertEquals("/GameTiles/Tile/Tile.jpg", underTest.getImage());
    }

    @Test
    public void shouldReturnFish0ForGetRandomAltImage(){
        GameTile underTest = new GameTile("Fish", 1);
        assertEquals("/GameTiles/Fish/Fish0.jpg", underTest.getRandomAltImage());
    }
}
