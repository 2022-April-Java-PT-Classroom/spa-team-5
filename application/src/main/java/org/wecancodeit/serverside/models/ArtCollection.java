package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ArtCollection {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String image;

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }
    public String getImage() {
        return image;
    }
    public ArtCollection(){

    }

    public ArtCollection(String name, String description, String image) {

        this.name = name;
        this.description = description;
        this.image = image;
    }

    public void save(ArtCollection art1) {
    }
}
