package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.ArtCollection;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserNameRepository userNameRepository;
    private ArtCollection artRepo;

    @Override
    public void run(String... args) throws Exception {


        UserName joe = new UserName("Joe","America", 35542);
        userNameRepository.save(joe);
        UserName adam = new UserName("Adam","America", 43253);
        userNameRepository.save(adam);
        UserName sam = new UserName("Sam","America", 45232);
        userNameRepository.save(sam);


        ArtCollection art1 = new ArtCollection("Kitano Tenjin Shrine (Kitano Tenjin engi emaki)", "The Shinto belief that" +
                " aggrieved human spirits can animate forces of nature underlies the origins of Kyoto’s Kitano Tenjin Shrine (Kitano Tenmangū)," +
                " dedicated to the scholar-poet and statesman Sugawara no Michizane (845–903), who died in exile after having been slandered by " +
                "enemies at court.", "art-images/kitano-tenjin.jpg");
        ArtCollection art2 = new ArtCollection("Sallet", "This helmet is the earliest surviving example of Renaissance armor" +
                " all'antica (in the antique style). The lion's head is an outer shell made of embossed and gilt copper that is fitted over " +
                "an underlying plain steel helmet. It represents the head of the Nemean Lion, whose pelt was worn as a headdress and cloak by " +
                "the mythological hero Hercules. ", "art-images/sallet.jpg");
        ArtCollection art3 = new ArtCollection("Coast Scene", "Claude Lorrain was the most famous and most sought-after landscape " +
                "painter working in Rome in the 17th century. He made numerous plein air studies in the countryside around Rome and then" +
                " incorporated his knowledge of nature and light into his painted compositions.", "art-images/coast.jpg");
        ArtCollection art4 = new ArtCollection("Speaker", "Trade cards from the \"Baseball Caramels\" series (E90), issued 1909-11 " +
                "by the American Caramel Company. There are three types of cards within the series. E90-1 cards depict players from across " +
                "the American and National Leagues. E90-2 cards depict only players from Pittsburgh and E90-3 cards display players from " +
                ".", "art-images/speaker.jpg");

        artRepo.save(art1);
        artRepo.save(art2);
        artRepo.save(art3);
        artRepo.save(art4);
    }
}
