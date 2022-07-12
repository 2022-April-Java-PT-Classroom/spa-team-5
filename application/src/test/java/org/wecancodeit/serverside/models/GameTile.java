package org.wecancodeit.serverside.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class GameTile {

    @Id @GeneratedValue
    private Long id;

    public GameTile(){}
}
