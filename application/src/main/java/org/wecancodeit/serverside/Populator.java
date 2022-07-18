package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.FishRepository;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserNameRepository userNameRepository;
    private FishRepository fishRepository;

    @Override
    public void run(String... args) throws Exception {


        UserName joe = new UserName("Joe","America", 35542);
        userNameRepository.save(joe);
        UserName adam = new UserName("Adam","America", 43253);
        userNameRepository.save(adam);
        UserName sam = new UserName("Sam","America", 45232);
        userNameRepository.save(sam);


    }

}
