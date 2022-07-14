package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.wecancodeit.serverside.models.GameTile;
import org.wecancodeit.serverside.repositories.GameTileRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.concurrent.ThreadLocalRandom;

@RestController @CrossOrigin
public class GameTileController {

    @Resource
    private GameTileRepository gameTileRepo;

    @GetMapping("/game-tiles")
    public Collection<GameTile> findAllGameTiles() {
        return (Collection<GameTile>) gameTileRepo.findAll();

    }

    @GetMapping("/game-tiles/{id}")
    public GameTile findOneGameTile(@PathVariable Long id){
        return gameTileRepo.findById(id).get();

    }

    @GetMapping("/game-tiles/random")
    public GameTile findRandomGameTile(){
        Collection<GameTile> gameTiles = (Collection<GameTile>)gameTileRepo.findAll();
        int randTileNum = ThreadLocalRandom.current().nextInt(0, gameTiles.size());
        int i = 0;
        for(GameTile gameTile : gameTiles){
            if (i == randTileNum){
                return gameTile;
            }
            i++;
        }
        return null;
    }
}
