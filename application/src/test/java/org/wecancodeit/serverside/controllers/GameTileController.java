package org.wecancodeit.serverside.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.wecancodeit.serverside.models.GameTile;
import org.wecancodeit.serverside.repositories.GameTileRepository;

import javax.annotation.Resource;
import java.util.Collection;

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
}
