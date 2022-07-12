package org.wecancodeit.serverside.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.repositories.GameTileRepository;

import javax.annotation.Resource;

@RestController @CrossOrigin
public class GameTileController {

    @Resource
    private GameTileRepository gameTileRepo;
}
