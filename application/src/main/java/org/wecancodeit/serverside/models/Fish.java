package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Fish {

    @Id
    @GeneratedValue

    private Long id;

    private String SpeciesName;

    private String ScientificName;

    private String Location;

    public Fish(String speciesName, String scientificName, String location) {
        SpeciesName = speciesName;
        ScientificName = scientificName;
        Location = location;
    }

    public Long getId() {
        return id;
    }

    public String getSpeciesName() {
        return SpeciesName;
    }

    public String getScientificName() {
        return ScientificName;
    }

    public String getLocation() {
        return Location;
    }


}
