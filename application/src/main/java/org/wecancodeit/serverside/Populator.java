package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.Fish;
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



    }

}
