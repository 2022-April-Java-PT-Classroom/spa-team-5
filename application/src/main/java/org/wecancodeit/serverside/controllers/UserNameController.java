package org.wecancodeit.serverside.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.UserName;
import org.wecancodeit.serverside.repositories.UserNameRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserNameController {

    @Resource
    private UserNameRepository userNameRepository;

    @GetMapping("/api/users")
    public Collection<UserName> getUserNames(){
        return (Collection<UserName>) userNameRepository.findAll();
    }

    @PostMapping("/api/users/add-user")
    public Collection<UserName> addUsers(@RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String userName = newUser.getString("name");
        String userCountry = newUser.getString("country");
        int userScore = newUser.getInt("score");
            UserName userNameToAdd = new UserName(userName,userCountry,userScore);
            userNameRepository.save(userNameToAdd);
//        Optional<UserName> userNameToAddOpt = userNameRepository.findByName(userName);
//        if(userNameToAddOpt.isEmpty()){
//        } else {
//            UserName userNameToAdd = new UserName(userName,userScore);
//            userNameRepository.save(userNameToAdd);
//        }
        return (Collection<UserName>) userNameRepository.findAll();
    }

    @PutMapping("/api/users/{id}/select-user")
    public Collection<UserName> selectUser(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newUserName = new JSONObject(body);
        String userName = newUserName.getString("name");
        Optional<UserName> userNameToSelectOpt = userNameRepository.findById(id);
        if(userNameToSelectOpt.isPresent()){
            userNameToSelectOpt.get();
            userNameRepository.save(userNameToSelectOpt.get());
        }
        return (Collection<UserName>) userNameRepository.findAll();
    }

    @DeleteMapping("/api/users/{id}/delete-user")
    public Collection<UserName> deleteUsers(@PathVariable Long id) throws JSONException {
        Optional<UserName> userNamesToRemoveOpt = userNameRepository.findById(id);
        userNamesToRemoveOpt.ifPresent(userName -> userNameRepository.delete(userName));
        return (Collection<UserName>) userNameRepository.findAll();
    }
}
