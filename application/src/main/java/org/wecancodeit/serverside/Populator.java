package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Fish;

import org.wecancodeit.serverside.models.ArtCollection;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.FishRepository;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private UserNameRepository userNameRepository;

    private FishRepository fishRepository;
    private ArtCollection artRepo;


    @Override
    public void run(String... args) throws Exception {


        UserName joe = new UserName("Joe","America", 35542);
        userNameRepository.save(joe);
        UserName adam = new UserName("Adam","America", 43253);
        userNameRepository.save(adam);
        UserName sam = new UserName("Sam","America", 45232);
        userNameRepository.save(sam);

        Fish acadianFish = new Fish("Acadian Fish", "Sebastes fasciatus", "Maine and New York");
        fishRepository.save(acadianFish);
        Fish arrowtoothFlounder = new Fish("Arrowtooth Flounder","Atheresthes stomias","Alaska to California");
        fishRepository.save(arrowtoothFlounder);
        Fish atlanticBlacktipShark = new Fish("Atlantic Blacktip Flounder","Carcharhinus limbatus","New England to Florida into the Gulf of Mexico");
        fishRepository.save(atlanticBlacktipShark);
        Fish atlanticCommonThresherShark = new Fish("Atlantic Common Thresher Shark","Alopias vulpinus","New York to North Carolina");
        fishRepository.save(atlanticCommonThresherShark);
        Fish atlanticMahiMahi= new Fish("Atlantic Mahi Mahi","Coryphaena hippurus","Massachusetts to Texas");
        fishRepository.save(atlanticMahiMahi);
        Fish atlanticSharpnoseShark= new Fish("Atlantic Sharpnose Shark","Rhizoprionodon terraenovae","Virginia to Texas");
        fishRepository.save(atlanticSharpnoseShark);
        Fish atlanticShortfinMakoShark = new Fish("Atlantic Shortfin Mako Shark","Isurus oxyrinchus","New England to Florida, Gulf of Mexico from Florida to Texas, and the Caribbean Sea");Fish atlanticSpinyDogfish = new Fish("Atlantic Spiny Dogfish","Squalus acanthias","Maine to North Carolina");
        fishRepository.save(atlanticShortfinMakoShark);
        Fish atlanticWahoo = new Fish("Atlantic Wahoo","Acanthocybium solandri","Massachusetts to Texas");
        fishRepository.save(atlanticWahoo);
        Fish californiaMarketSquid = new Fish("California Market Squid","Doryteuthis (Loligo) opalescens","California");
        fishRepository.save(californiaMarketSquid);
        Fish canaryRockfish = new Fish("Canary Rockfish","Sebastes pinniger","Alaska to California");
        fishRepository.save(canaryRockfish);
        Fish crimsonJobfish = new Fish("Crimson Jobfish","Pristipomoides filamentosus","Hawaii and Pacific Island Region territories");
        fishRepository.save(crimsonJobfish);
        Fish geoduck = new Fish("Geoduck","Panopea generosa","Washington State and Alaska");
        fishRepository.save(geoduck);



        ArtCollection art1 = new ArtCollection("Kitano Tenjin Shrine (Kitano Tenjin engi emaki)", "The Shinto belief that" +
                " aggrieved human spirits can animate forces of nature underlies the origins of Kyoto’s Kitano Tenjin Shrine (Kitano Tenmangū)," +
                " dedicated to the scholar-poet and statesman Sugawara no Michizane (845–903), who died in exile after having been slandered by " +
                "enemies at court.", "kitano-tenjin.jpg");
        ArtCollection art2 = new ArtCollection("Sallet", "This helmet is the earliest surviving example of Renaissance armor" +
                " all'antica (in the antique style). The lion's head is an outer shell made of embossed and gilt copper that is fitted over " +
                "an underlying plain steel helmet. It represents the head of the Nemean Lion, whose pelt was worn as a headdress and cloak by " +
                "the mythological hero Hercules. ", "sallet.jpg");
        ArtCollection art3 = new ArtCollection("Coast Scene", "Claude Lorrain was the most famous and most sought-after landscape " +
                "painter working in Rome in the 17th century. He made numerous plein air studies in the countryside around Rome and then" +
                " incorporated his knowledge of nature and light into his painted compositions.", "coast.jpg");
        ArtCollection art4 = new ArtCollection("Speaker", "Trade cards from the \"Baseball Caramels\" series (E90), issued 1909-11 " +
                "by the American Caramel Company. There are three types of cards within the series. E90-1 cards depict players from across " +
                "the American and National Leagues. E90-2 cards depict only players from Pittsburgh and E90-3 cards display players from " +
                ".", "speaker.jpg");

        artRepo.save(art1);
        artRepo.save(art2);
        artRepo.save(art3);
        artRepo.save(art4);
    }

}
