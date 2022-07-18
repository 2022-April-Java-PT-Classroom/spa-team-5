package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Fish;

import java.util.Optional;

public interface FishRepository extends CrudRepository {

    Optional<Fish> findById (Long Id);

}
