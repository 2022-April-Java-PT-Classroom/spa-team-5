package org.wecancodeit.serverside.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.models.Fish;
import org.wecancodeit.serverside.repositories.FishRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class FishController {

    @Resource

    private FishRepository fishRepo;

    @GetMapping
    public Collection<Fish> getFish(){
        return (Collection<Fish>) fishRepo.findAll();
    }
}
