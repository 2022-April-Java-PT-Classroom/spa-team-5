package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.UserName;

import java.util.Optional;

public interface UserNameRepository extends CrudRepository<UserName, Long> {
    Optional<UserName> findByName(String name);
}
