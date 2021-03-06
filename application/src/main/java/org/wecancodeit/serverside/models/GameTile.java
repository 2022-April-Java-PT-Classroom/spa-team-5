package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.concurrent.ThreadLocalRandom;

@Entity
public class GameTile {

    @Id @GeneratedValue
    private Long id;
    private String name;
    private int numberOfAlts;

    public GameTile(){}

    public GameTile(String name, int numberOfAlts){
        this.name = name;
        this.numberOfAlts = numberOfAlts;
    }

    public Long getId() {return id;}
    public String getName() {return name;}
    public int getNumberOfAlts() {return numberOfAlts;}
    public String getImage(){return "/GameTiles/" + name + "/" + name + ".png";}
    public int getRandomAltImage(){
        int randAltImgNum = ThreadLocalRandom.current().nextInt(0, numberOfAlts);
        return  randAltImgNum;
    }
    public String[] getAltImages(){
        String[] altImages = new String[numberOfAlts];
        for (int i=0; i < numberOfAlts; i++){
            altImages[i] = "/GameTiles/" + name + "/" + name + i + ".png";
        }
        return altImages;
    }
}
