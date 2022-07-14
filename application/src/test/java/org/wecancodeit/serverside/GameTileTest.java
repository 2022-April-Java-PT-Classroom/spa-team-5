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
        assertEquals("/GameTiles/Tile", underTest.getImage());
    }

    @Test
    public void shouldReturnTile0ForGetRandomAltImage(){
        GameTile underTest = new GameTile("Tile", 1);
        assertEquals("/GameTiles/Tile0", underTest.getRandomAltImage());
    }
}
