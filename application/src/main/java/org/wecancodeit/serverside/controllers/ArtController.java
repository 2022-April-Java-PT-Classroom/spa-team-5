package org.wecancodeit.serverside.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.ArtCollection;
import org.wecancodeit.serverside.models.GameTile;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.ArtRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class ArtController {
  @Resource
  private ArtRepository artRepo;

  @GetMapping("/api/art")
  public Collection<ArtCollection> getArtCollection() {
    return (Collection<ArtCollection>) artRepo.findAll();
  }
  
  @PostMapping("/api/arts")
  public Collection<ArtCollection> addArtCollection(@RequestBody String body) throws JSONException{
    JSONObject newArtCollection = new JSONObject(body);
    String addArtName = newArtCollection.getString("name");
    return (Collection<ArtCollection>) artRepo.findAll();
  }

}
