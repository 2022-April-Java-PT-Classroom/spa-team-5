package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.GameTile;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.GameTileRepository;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserNameRepository userNameRepository;

    @Resource
    private GameTileRepository gameTileRepository;

    @Override
    public void run(String... args) throws Exception {

        GameTile gameTile = new GameTile("OrangeStripedFish", 1);
        gameTileRepository.save(gameTile);
        gameTile = new GameTile("BirdsTree", 3);
        gameTileRepository.save(gameTile);
        gameTile = new GameTile("TwoTreeIsland", 2);
        gameTileRepository.save(gameTile);


        UserName joe = new UserName("Joe","America", 35542);
        userNameRepository.save(joe);
        UserName adam = new UserName("Adam","America", 43253);
        userNameRepository.save(adam);
        UserName sam = new UserName("Sam","America", 45232);
        userNameRepository.save(sam);
    }
}
