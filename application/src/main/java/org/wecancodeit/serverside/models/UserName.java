package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserName {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String country;
    private int score;

    public Long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getCountry(){
        return country;
    }

    public int getScore(){
        return score;
    }

    public UserName(){}

    public UserName(String name,String country, int score){
        this.name = name;
        this.country = country;
        this.score = score;
    }

}
